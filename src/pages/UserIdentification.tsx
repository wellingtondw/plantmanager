import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { 
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Button } from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function UserIdentification() {
  const navigation = useNavigation()

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState('')


  function HandleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }


  function handleSubmit() {
    navigation.navigate('Confirmation')
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.content}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.form}>
                <View style={styles.header}>
                  <Text style={styles.emoji}>
                    {isFilled ? '😊' : '😃'}
                  </Text>

                  <Text style={styles.title}>
                    Como podemos {'\n'}
                    chamar você?
                  </Text>
                </View>

                <TextInput 
                  style={[
                    styles.input,
                    (isFocused || isFilled) && { borderColor: colors.green }
                  ]} 
                  placeholder='Digite um nome'
                  onBlur={HandleInputBlur}
                  onFocus={handleInputFocus}
                  onChangeText={handleInputChange}            
                />

                <View style={styles.footer}>
                  <Button title='Confirmar' onPress={handleSubmit} />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  form: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center'
  }, 
  header: {
    textAlign: 'center',
    alignItems: 'center'
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