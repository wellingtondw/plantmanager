import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'

type ButtonProps = {
  text: string;
} & TouchableOpacityProps

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      style={styles.button}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonText: {
    color: colors.white,
    fontSize: 24
  },
})