import { Text, SafeAreaView, Image, View, StatusBar, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { GetNotes } from '../../services/authApiAxios'
import MyNote from '../../components/CardNote/MyNote'
import styles from './Notes.style'

const Notes = ({ navigation, route }) => {

  const [myNotes, setMyNotes] = useState([]);

  const { id_user } = useSelector(state => state.auth)

  const { title } = route.params;

  useEffect(() => {
    const getAllNotes = async () => {
      const response = await GetNotes({ id_user: id_user });
      if (response.code === 200) {
        setMyNotes(response.dataNotes)
      } else if (response.code === 400) {
        setMyNotes([])
      }
    }
    getAllNotes()
  }, [])

  return (
    <>
      {myNotes ?
        myNotes.length <= 0 ?
          <View style={styles.container}>
            <Image
              style={styles.imageLogin}
              source={require('../../images/registrodesecion.png')}
            />
          </View>
          :
          <SafeAreaView style={styles.container}>
            <StatusBar animated={true} barStyle={'dark-content'} />
            <View style={styles.listContainer}>
              <Text style={styles.lblTitle}>{title}</Text>
              <FlatList
                data={myNotes}
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