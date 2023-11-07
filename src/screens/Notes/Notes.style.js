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
  },
  imageEmpty: {
    width: 300,
    height: 300
  },
  addFirstNote: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: colors.melon,
  },
})
