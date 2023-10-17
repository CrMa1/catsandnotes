import { FlatList, SafeAreaView, StatusBar, View, Text } from 'react-native'
import React from 'react'
import styles from './Home.style'
import data from '../../data/dataTemporla'
import CardNote from '../../components/CardNote/CardNote'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      <View style={styles.listContainer}>
        <Text style={styles.lblTitle}>Mis notas</Text>
        <FlatList
          data={data}
          numColumns={2}
          columnWrapperStyle={styles.weapperStyle}
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