import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input } from '@rneui/themed'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import DialogAlert from '../../components/Dialog/DialogAlert'
import styles from './Settings.style'
import { ChangeImageProfile, ChangeMyName } from '../../services/authApiAxios'
import { updateSession } from '../../db'
import { setImageProfile, setUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'

const Settings = () => {

  const dispatch = useDispatch()

  //Variables globales de redux
  const { username, id_user } = useSelector(state => state.auth)

  //Guarda el nuevo nombre
  const [name, setName] = useState(username)
  const [errorName, setErrorName] = useState('')

  //Renombrar la variable que trae la img de perfil
  const image = useSelector(state => state.auth.imageProfile)

  //Alerta de errores
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTxt, setDialogTxt] = useState('Ocurrió un error inesperado, inténtalo más tarde.');
  const [titleModal, setTitleModal] = useState('')

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      setTitleModal('Error')
      setDialogTxt('Rechazaste el acceso a la cámara, puedes habilitarla desde Ajustes->CatsAndNotes->Camara.')
      toggleDialog()
      return false
    }
    return true
  }

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions()
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.5,
      })
      if (!result.canceled) {
        dispatch(setImageProfile(`data:image/jpeg;base64,${result.assets[0].base64}`))
      }
    }
  }

  const pickImageGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      base64: true,
      quality: 0.5,
    });
    if (!result.canceled) {
      dispatch(setImageProfile(`data:image/jpeg;base64,${result.assets[0].base64}`))
    }
  }

  const confirmImage = async () => {
    const response = await ChangeImageProfile({ image: image, id_user: id_user });
    if (response.code === 200) {
      setTitleModal('Success')
      setDialogTxt('Imagen cambiada exitosamente n.n')
      changeInLocal(response.dataUser)
    } else {
      setTitleModal('Error')
      setDialogTxt('Ocurrió un error inesperado, inténtalo más tarde.')
    }
    toggleDialog()
  }

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  const changeName = async () => {
    const response = await ChangeMyName({ name: name, id_user: id_user });
    if (response.code === 200) {
      setTitleModal('Success')
      setDialogTxt('Nombre cambiado exitosamente n.n')
      changeInLocal(response.dataUser)
      dispatch(setUser({ id_user: response.dataUser['id_usuario'], email: response.dataUser['email'], username: name }))
      dispatch(setImageProfile(response.dataUser['imagen_perfil']))
    } else {
      setTitleModal('Error')
      setDialogTxt('Ocurrió un error inesperado, inténtalo más tarde.')
    }
    toggleDialog()
  }

  const changeInLocal = user => {
    updateSession({
      image_profile: user['imagen_perfil'],
      email: user['email'],
      username: user['nombre']
    });
  }

  const logout = () => {
    deleteSession()
    dispatch(setUser({ id_user: null, email: null, username: null }))
    dispatch(setImageProfile(null))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'padding'}
      keyboardVerticalOffset={32}>
      <View style={styles.loginContainer}>
        {image
          ?
          <Image
            style={styles.imageProfile}
            source={{
              uri: image
            }}
            resizeMode='cover'
          />
          :
          <Image
            style={styles.imageProfile}
            source={require('../../images/login.png')}
          />
        }
        <View style={styles.buttonsImages}>
          <TouchableOpacity style={styles.buttonsPickers} onPress={pickImage}>
            <Text>Tomar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonsPickers} onPress={pickImageGalery}>
            <Text>Seleccionar Foto</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttons} onPress={confirmImage}>
          <Text>Confirmar la nueva foto</Text>
        </TouchableOpacity>
        <View style={styles.changeName}>
          <Input
            placeholder='Nombre'
            leftIcon={{ type: 'font-awesome', name: 'paw' }}
            style={styles.inputLogin}
            errorStyle={{ color: 'red' }}
            errorMessage={errorName}
            value={name}
            onChangeText={value => { setName(value); setErrorName('') }}
          />
          <TouchableOpacity style={styles.buttons} onPress={changeName}>
            <Text>Cambiar nombre</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
            <Text>Cerrar Sesión</Text>
          </TouchableOpacity>
      </View>
      <DialogAlert dialogVisible={dialogVisible} styleError={styles.errorDialog} title={titleModal} toggleDialog={toggleDialog} text={dialogTxt} />
    </KeyboardAvoidingView>
  )
}

export default Settings