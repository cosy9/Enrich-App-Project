import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LuxuryHair from './LuxuryHair/LuxuryHair'
import MoreLuxuryHair from './MoreLuxuryHair/MoreLuxuryHair'
import MoreTopImage from './MoreTopImage/MoreTopImage'
import TopImage from './TopImage/TopImage'

const ValuePackagesSection = () => {
  return (
    <View style={styles.container}>
      <TopImage/>
      <MoreTopImage/>
      <LuxuryHair/>
      <MoreLuxuryHair/>
    </View>
  )
}

export default ValuePackagesSection

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f6f8',
  }
})
