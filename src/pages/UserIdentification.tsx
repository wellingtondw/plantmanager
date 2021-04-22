import React from 'react'
import { 
  SafeAreaView, 
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'


export function UserIdentification() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>
            😃
          </Text>

          <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
          </Text>

          <TextInput style={styles.input} placeholder='Digite um nome'/>

          <View style={styles.footer}>
            <Button />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: 120
  },
  form: {
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  }, 
  emoji: {
    fontSize: 36,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 20
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center'
  },
  footer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20
  } 
})