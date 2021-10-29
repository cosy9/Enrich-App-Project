import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyWallet = () => {
  return (
    <View style={styles.container}>
      <Text>
        Wallet Page
      </Text>
    </View>
  )
}

export default MyWallet

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
