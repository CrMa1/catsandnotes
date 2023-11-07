import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonsImages: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  loginContainer: {
    width:'100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProfile: {
    width: 150,
    height: 150,
  },
  changeName: {
    width: '100%',
    marginTop: 50,
    alignItems: 'center'
  },
  inputLogin: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  buttonsPickers: {
    width: "45%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.violet,
  },
  buttons: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.violet,
  },
  noAccount: {
    marginTop: 20
  },
  errorDialog: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  buttonLogout: {
    width: "100%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.orangeWhite,
  },
})
