import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems: 'center',
  },
  signupContainer: {
    width:'100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLogin: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.violet,
  },
  haveAccount: {
    marginTop: 20
  },
  bobbleBottom: {
    width:'35%',
    height: 130,
    backgroundColor: colors.pink,
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopRightRadius: 100,
    zIndex:-1
  },
  bobbleTop: {
    width:'35%',
    height: 130,
    backgroundColor: colors.pink,
    position: 'absolute',
    top: 0,
    right: 0,
    borderBottomLeftRadius: 100,
    zIndex:-1
  },
  errorDialog: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
})
