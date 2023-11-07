import { FlatList, SafeAreaView, StatusBar, View, Text } from 'react-native'
import React from 'react'
import styles from './Home.style'
import data from '../../data/dataTemporla'
import CardNote from '../../components/CardNote/CardNote'
import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {
  const { username } = useSelector(state => state.auth)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <View style={styles.listContainer}>
        <Text style={styles.lblTitle}>Bienvenido, {username}</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardNote data={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home