import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Input } from '@rneui/themed'
import React from 'react'
import styles from './Login.style'

const Login = ({navigation}) => {
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
        />
        <Input
          placeholder='Contraseña'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          secureTextEntry={true}
          style={styles.inputLogin}
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles.noAccount}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text>Registrarme</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login