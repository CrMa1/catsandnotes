import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './NewNote.style'
import { Input } from '@rneui/themed'

const NewNote = () => {
  return (
    <View style={styles.container}>
      <View style={styles.InputView}>
        <Input
          placeholder='Título de tu nueva Nota'
          leftIcon={{ type: 'font-awesome', name: 'pencil' }}
          inputContainerStyle={{width:'90%'}}
        />
      </View>
      <View style={styles.InputView}>
        <TextInput
          multiline={true}
          style={styles.inputDescription}
          numberOfLines={10}
          placeholder='Escribe aquí el contenido de tu nueva Nota' />
      </View>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.buttonSubmit}
        >
          <Text>Guardar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default NewNote