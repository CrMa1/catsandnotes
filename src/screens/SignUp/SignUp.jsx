import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input } from '@rneui/themed'
import styles from './SignUp.style'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'
import DialogAlert from '../../components/Dialog/DialogAlert'
import { Register } from '../../services/authApiAxios'

const SignUp = ({ navigation }) => {

  //Declara dispatch para redux
  const dispatch = useDispatch()

  //Crea las ref para los input (focus)
  const refEmail = useRef();
  const refPassword = useRef();

  //Variables para el form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //Inicializa los errores en los inputs
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPass, setErrorPass] = useState('')

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

  //Ejecuta el Registro
  const signUp = async () => {

    //Errores para inputs vacíos
    name === '' ? setErrorName('Ingresa un Nombre') : setErrorName('')
    email === '' ? setErrorEmail('Ingresa un Correo') : setErrorEmail('')
    password === '' ? setErrorPass('Ingresa una Contraseña') : setErrorPass('')
    if (name === '' || email === '' || password === '') { return false }

    const response = await Register({ name: name, email: email, password: password });
    
    //Si se registra con éxito, se inicia sesión
    if (response.code===200) {
      dispatch(setUser({ id_user:response.dataUser[0], email: email,username: response.dataUser[1]}))
      insertSession({
        id_user: response.dataUser[0],
        image_profile: '',
        email: email,
        username: response.dataUser[1]
      })
    }else if(response.code===400){
      setDialogTxt('La cuenta ya se encuentra registrada, inicia sesión!')
      toggleDialog()
    }else{
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
      <View style={styles.signupContainer}>
        <Input
          placeholder='Nombre'
          leftIcon={{ type: 'font-awesome', name: 'paw' }}
          style={styles.inputLogin}
          errorStyle={{ color: 'red' }}
          errorMessage={errorName}
          onChangeText={value => { setName(value); setErrorName('') }}
          onSubmitEditing={() => refEmail.current.focus()}
        />
        <Input
          placeholder='Correo'
          leftIcon={{ type: 'font-awesome', name: 'paw' }}
          style={styles.inputLogin}
          errorStyle={{ color: 'red' }}
          errorMessage={errorEmail}
          onChangeText={value => { setEmail(value); setErrorEmail('') }}
          onSubmitEditing={() => refPassword.current.focus()}
          ref={refEmail}
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
          ref={refPassword}
        />
        <TouchableOpacity style={styles.loginBtn} onPress={signUp}>
          <Text>Registrarme</Text>
        </TouchableOpacity>
        <View style={styles.haveAccount}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bobbleBottom}></View>
      <View style={styles.bobbleTop}></View>
      <DialogAlert dialogVisible={dialogVisible} styleError={styles.errorDialog} title='Error' toggleDialog={toggleDialog} text={dialogTxt} />
    </KeyboardAvoidingView>
  )
}

export default SignUp