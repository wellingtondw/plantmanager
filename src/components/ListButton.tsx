import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

type ListButtonProps = {
  title: string;
  active?: boolean;
} & RectButtonProperties

export function ListButton({ title, active = false, ...rest }: ListButtonProps) {
  return (
    <RectButton style={[styles.container, active && styles.containerActive]} {...rest}>
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})