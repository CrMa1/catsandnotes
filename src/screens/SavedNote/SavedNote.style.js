import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent:'center',
    alignItems: 'center',
  },
  imageEmpty: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },
  btnBack: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: colors.aqua,
  },
})
