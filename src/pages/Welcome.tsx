import React from 'react'
import { 
  SafeAreaView, 
  Image, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Dimensions 
} from "react-native";
import { Feather } from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Text>

      <Image 
        source={wateringImg} 
        style={styles.image}
        resizeMode='contain'
      />

      <Text  style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. 
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity 
        activeOpacity={0.7} 
        style={styles.button}
      >
        <Feather name='chevron-right' style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
    paddingHorizontal: 20,
    color: colors.heading
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24
  },  
})