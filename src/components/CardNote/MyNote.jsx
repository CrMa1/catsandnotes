import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './MyNote.style'

const MyNote = ({ data, navigation }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Edit', { note: data })} >
        <Text>{data.titulo}</Text>
      </TouchableOpacity>
    </>

  )
}

export default MyNote