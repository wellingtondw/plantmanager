import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { Header } from '../components/Header'
import { ListButton } from '../components/ListButton'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function PlantSelect() {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Header />

        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList 
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => {
           return (
            <View style={styles.buttonContainer}>
              <ListButton title='Cozinha' />
            </View>
           )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 32
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 6,
    paddingLeft: 32,
    marginVertical: 32
  },
  buttonContainer: {
    marginRight: 8
  }
})