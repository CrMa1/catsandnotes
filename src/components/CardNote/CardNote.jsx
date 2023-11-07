import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CardNote.style'

const CardNote = ({ data, navigation }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Notes', { title: data.title })} >
        <Image
          style={styles.images}
          source={data.image}
        />
      </TouchableOpacity>
    </>

  )
}

export default CardNote