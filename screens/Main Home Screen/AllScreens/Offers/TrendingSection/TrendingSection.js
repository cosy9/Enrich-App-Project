import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <Text>
        Trending section
      </Text>
    </View>
  )
}

export default TrendingSection

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
