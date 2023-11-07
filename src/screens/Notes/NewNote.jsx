import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './NewNote.style'
import { Input } from '@rneui/themed'
import { DoNote } from '../../services/authApiAxios'
import { useSelector } from 'react-redux'
import DialogAlert from '../../components/Dialog/DialogAlert'
import { navigationPush } from '../../components/NavigationMethods/NavigationMethods'
//import { setNote } from '../../features/note/noteSlice'

const NewNote = () => {
  
  //Trae el id usuario de la sesión de redux
  const { id_user } = useSelector(state => state.auth)

  //Guarda valores de inputs
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  //Inicializa los errores en los inputs
  const [errorTitle, setErrorTitle] = useState('')

  //Alerta de errores
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogTxt, setDialogTxt] = useState('Ocurrió un error inesperado, inténtalo más tarde.');

  const toggleDialog = () => {
    setDialogVisible(!dialogVisible);
  };

  //Guardar la nota
  const saveNote = async () => {

    title === '' ? setErrorTitle('Inresa un Título') : setErrorTitle('')
    if (title === '') { return false }

    const response = await DoNote({ title: title, content: content, id_user: id_user });
    if (response.code === 200) {
      navigationPush('Saved')
      setTitle('')
      setContent('')
      //dispatch(setNote({ id_user:response.dataUser[0], email: email,username: response.dataUser[1]}))
    } else {
      setDialogTxt('Algo salió mal, inténtalo de nuevo más tarde.')
      toggleDialog()
    }
  }


  return (
    <View style={styles.container}>
      <View style={styles.InputView}>
        <Input
          placeholder='Título de tu nueva Nota'
          leftIcon={{ type: 'font-awesome', name: 'pencil' }}
          inputContainerStyle={{ width: '90%' }}
          errorStyle={{ color: 'red' }}
          errorMessage={errorTitle}
          onChangeText={value => { setTitle(value); setErrorTitle('') }}
        />
      </View>
      <View style={styles.InputView}>
        <TextInput
          multiline={true}
          style={styles.inputDescription}
          onChangeText={value => { setContent(value) }}
          numberOfLines={10}
          placeholder='Escribe aquí el contenido de tu nueva Nota' />
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.buttonSubmit}
          onPress={saveNote}
        >
          <Text>Guardar</Text>
        </Pressable>
      </View>
      <DialogAlert dialogVisible={dialogVisible} styleError={styles.errorDialog} title='Error' toggleDialog={toggleDialog} text={dialogTxt} />
    </View>
  )
}

export default NewNote