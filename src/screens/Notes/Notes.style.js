import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  listContainer: {
    flex:1,
    width: '90%',
  },
  lblTitle: {
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 20
  }
})
