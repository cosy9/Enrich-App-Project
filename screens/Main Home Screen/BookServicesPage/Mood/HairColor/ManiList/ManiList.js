import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ManiList = () => {
  return (
    <View style={styles.container}>
      <Text>Mani list</Text>
    </View>
  )
}

export default ManiList

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
  }
})
