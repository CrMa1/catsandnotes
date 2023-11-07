import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MyNote.style'

const MyNote = ({ data, navigation }) => {
  //onPress={() => navigation.navigate('Edit', { note: data })}
  return (
    <>
      <TouchableOpacity style={styles.container} >
        <View style={styles.containerText}>
          <Text style={styles.title}>{data.titulo}</Text>
          <Text style={styles.content}>{data.contenido}</Text>
        </View>
      </TouchableOpacity>
    </>

  )
}

export default MyNote