import { View, Image } from 'react-native'
import React from 'react'
import styles from './SavedNote.style'

const SavedNote = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageLogin}
        source={require('../../images/gatocargando.png')}
      />
    </View>
  )
}

export default SavedNote