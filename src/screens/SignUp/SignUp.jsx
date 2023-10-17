import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input, Dialog } from '@rneui/themed'
import styles from './SignUp.style'
import { useSignUpMutation } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/auth/authSlice'
import { insertSession } from '../../db'

const SignUp = ({ navigation }) => {

  //Declara dispatch para redux
  const dispatch = useDispatch()

  //Crea las ref para los input (focus)
  const refEmail = useRef();
  const refPassword = useRef();

  //Guarda los datos del form
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

  //Trigger de la función para el registro
  const [triggerSignup, result] = useSignUpMutation()

  //Ejecuta el Registro
  const signUp = () => {

    //Errores para inputs vacíos
    name === '' ? setErrorName('Inresa un Nombre') : setErrorName('')
    email === '' ? setErrorEmail('Inresa un Correo') : setErrorEmail('')
    password === '' ? setErrorPass('Inresa una Contraseña') : setErrorPass('')
    if (name === '' || email === '' || password === '') { return false }
    
    //Trigger para el Registro
    triggerSignup({
      email,
      password
    })
      .unwrap()
      .then(result => {
        dispatch(setUser(result))
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
          username: name,
        })
      })
      .catch(
        err =>
          console.log(err)
      )
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
        <View style={styles.noAccount}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bobbleBottom}></View>
      <View style={styles.bobbleTop}></View>
      <Dialog
        isVisible={dialogVisible}
      >
        <View style={styles.errorDialog}>
          <Dialog.Title title="Error" />
          <Dialog.Button title="x" onPress={toggleDialog} style={{marginTop:-10}} />
        </View>

        <Text>Ocurrió un error inesperado, inténtalo más tarde.</Text>
      </Dialog>
    </KeyboardAvoidingView>
  )
}

export default SignUp