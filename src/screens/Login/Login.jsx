import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input } from '@rneui/themed'
import React, { useState } from 'react'
import styles from './Login.style'
import { useDispatch } from 'react-redux'
import { setUser, setImageProfile } from '../../features/auth/authSlice'
import { insertSession } from '../../db'
import { LoginUser } from '../../services/authApiAxios'
import DialogAlert from '../../components/Dialog/DialogAlert'

const Login = ({ navigation }) => {

  //Variables para el form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Inicializa los errores en los inputs
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPass, setErrorPass] = useState('')

  //Usar el dispatch para redux
  const dispatch = useDispatch()

  //Inicializa el input en "security"
  const [isSecurity, setIdSecurity] = useState(true)

  //Inicializa el icono del input en "eye"
  const [secutiryIcon, setSecutiryIcon] = useState('eye')

  // Cambia el input de security a text
  const showPassword = () => {
    isSecurity ? setIdSecurity(false) : setIdSecurity(true);
    isSecurity ? setSecutiryIcon('eye-slash') : setSecutiryIcon('eye');
  }

  //Alerta de errores
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTxt, setDialogTxt] = useState('Ocurrió un error inesperado, inténtalo más tarde.');

  //Ejecuta el Login
  const setLogin = async () => {

    //Errores para inputs vacíos
    email === '' ? setErrorEmail('Ingresa un Correo') : setErrorEmail('')
    password === '' ? setErrorPass('Ingresa una Contraseña') : setErrorPass('')
    if (email === '' || password === '') { return false }

    const response = await LoginUser({ email: email, password: password });

    if (response.code === 200) {
      dispatch(setUser({ id_user: response.dataUser[0], email: email, username: response.dataUser[1] }))
      dispatch(setImageProfile(response.dataUser['imagen_perfil']))
      insertSession({
        id_user: response.dataUser['id_usuario'],
        image_profile: (response.dataUser['imagen_perfil']!== null)?response.dataUser['imagen_perfil']:'',
        email: email,
        username: response.dataUser['nombre']
      })
    } else if (response.code === 400) {
      setDialogTxt('Usuario o Contraseña incorrectos.')
      toggleDialog()
    } else {
      setDialogTxt('Ocurrió un error inesperado, inténtalo más tarde.')
      toggleDialog()
    }
  }

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'padding'}
      keyboardVerticalOffset={32}
    >
      <View style={styles.loginContainer}>
        <Image
          style={styles.imageLogin}
          source={require('../../images/login.png')}
        />
        <Input
          placeholder='Correo'
          leftIcon={{ type: 'font-awesome', name: 'paw' }}
          style={styles.inputLogin}
          errorStyle={{ color: 'red' }}
          errorMessage={errorEmail}
          onChangeText={value => { setEmail(value); setErrorEmail('') }}
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          placeholder='Contraseña'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          rightIcon={{ type: 'font-awesome', name: secutiryIcon, onPress: showPassword }}
          secureTextEntry={isSecurity}
          style={styles.inputLogin}
          errorStyle={{ color: 'red' }}
          errorMessage={errorPass}
          onChangeText={value => { setPassword(value); setErrorPass('') }}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={setLogin}>
          <Text>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
      <DialogAlert dialogVisible={dialogVisible} styleError={styles.errorDialog} title='Error' toggleDialog={toggleDialog} text={dialogTxt} />
    </KeyboardAvoidingView>
  )
}

export default Login