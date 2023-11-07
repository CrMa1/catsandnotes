import { View, Text } from 'react-native'
import React from 'react'
import { Dialog } from '@rneui/themed'

const DialogAlert = ({dialogVisible,styleError,title,toggleDialog,text}) => {
  return (
    <>
        <Dialog
            isVisible={dialogVisible}
        >
        <View style={styleError}>
          <Dialog.Title title={title} />
          <Dialog.Button title="x" onPress={toggleDialog} style={{marginTop:-10}} />
        </View>

        <Text>{text}</Text>
      </Dialog>
    </>
  )
}

export default DialogAlert