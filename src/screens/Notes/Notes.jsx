import { Text, SafeAreaView, Image, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { GetNotes } from '../../services/authApiAxios'
import MyNote from '../../components/CardNote/MyNote'
import styles from './Notes.style'
import { useDispatch } from 'react-redux'
import { setNote } from '../../features/note/noteSlice'

const Notes = ({ navigation, route }) => {

  const dispatch = useDispatch();

  const { notes } = useSelector(state => state.note)

  const { id_user } = useSelector(state => state.auth)

  const { title } = route.params;

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await GetNotes({ id_user: id_user });
      dispatch(setNote(response.dataNotes))
    }
    getAllNotes()
  }, [])

  return (
    <>
      {notes ?
        notes.length <= 0 ?
          <View style={styles.container}>
            <Image
              style={styles.imageEmpty}
              source={require('../../images/notesEmpty.png')}
            />
            <Text style={styles.lblTitle}>Parece que aún no has agregado ninguna nota.</Text>
            <TouchableOpacity style={styles.addFirstNote} onPress={() => { navigation.navigate('BottomNotes') }}>
              <Text>Agregar Nota</Text>
            </TouchableOpacity>
          </View>
          :
          <SafeAreaView style={styles.container}>
            <StatusBar animated={true} barStyle={'dark-content'} />
            <View style={styles.listContainer}>
              <Text style={styles.lblTitle}>{title}</Text>
              <FlatList
                data={notes}
                keyExtractor={item => item.id_nota}
                renderItem={({ item }) => (
                  <MyNote data={item} navigation={navigation} />
                )}
              />
            </View>
          </SafeAreaView>
        :
        <View style={styles.container}>
          <Image
            style={styles.imageLogin}
            source={require('../../images/gatocargando.png')}
          />
        </View>
      }
    </>
  )
}

export default Notes