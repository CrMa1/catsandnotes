import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './CardNote.style'

const CardNote = ({ data }) => {
  return (
    <>
      <Pressable style={styles.container}>
        <Text>{data.title}</Text>
      </Pressable>
    </>

  )
}

export default CardNote