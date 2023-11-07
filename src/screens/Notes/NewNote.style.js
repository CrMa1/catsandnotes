import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop:'25%',
    justifyContent:'center',
  },
  contentImage: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems: 'center',
  },
  imageLogin: {
    marginBottom: 40
  },
  inputDescription: {
    backgroundColor: colors.melon,
    width:'90%',
    maxHeight: 400,
    minHeight: 100,
    borderRadius: 15,
    textAlign:'center',
  },
  InputView: {
    paddingBottom: 30,
    paddingLeft: '10%',
  },
  buttonView: {
    paddingBottom: 30,
    alignItems:'center',
  },
  buttonSubmit: {
    backgroundColor: colors.orangeWhite,
    width:'30%',
    borderRadius: 15,
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
