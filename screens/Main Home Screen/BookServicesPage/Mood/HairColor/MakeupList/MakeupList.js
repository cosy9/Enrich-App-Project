import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MakeupList = () => {
  return (
    <View style={styles.container}>
      <Text>Makeup list</Text>
    </View>
  )
}

export default MakeupList

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyItems: 'center',
  }
})
