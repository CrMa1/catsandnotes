import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.aquaStrong,
    minHeight: 100,
    width: '100%',
    marginVertical: 10,
    borderRadius: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  content: {
    marginTop: 5,
  },
  containerText: {
    margin: 10
  }
})
