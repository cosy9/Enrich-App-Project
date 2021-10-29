import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MyBooking = () => {
  return (
    <View style={styles.container}>
      <Text>
        Booking Page
      </Text>
    </View>
  )
}

export default MyBooking

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
