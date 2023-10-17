import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems: 'center',
  },
  loginContainer: {
    width:'100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogin: {
    marginBottom: 40
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
  noAccount: {
    marginTop: 20
  },
})
