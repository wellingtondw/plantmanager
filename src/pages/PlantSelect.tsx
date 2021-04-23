import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { Header } from '../components/Header'

import colors from '../styles/colors'

export function PlantSelect() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})