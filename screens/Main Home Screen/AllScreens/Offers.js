import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Offers = () => {
  return (
    <View style={styles.container}>
      <Text>
        Offers Page
      </Text>
    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
