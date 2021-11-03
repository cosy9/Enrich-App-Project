import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SkinList = () => {
  return (
    <View style={styles.container}>
      <Text>Skin list</Text>
    </View>
  )
}

export default SkinList

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
  }
})
