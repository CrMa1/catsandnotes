import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './SavedNote.style'

const SavedNote = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageEmpty}
        source={require('../../images/success.png')}
      />
      <Text>Tarea agregada correctamente.</Text>
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('New')}>
        <Text>Agregar otra</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SavedNote