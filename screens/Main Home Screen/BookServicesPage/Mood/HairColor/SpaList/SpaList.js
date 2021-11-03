import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SpaList = () => {
  return (
    <View style={styles.container}>
      <Text>Spa list</Text>
    </View>
  )
}

export default SpaList

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
  }
})
