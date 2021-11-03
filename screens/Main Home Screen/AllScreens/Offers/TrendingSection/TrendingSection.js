import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderImage from './HeaderImage/HeaderImage'
import PriceImage from './PriceImage/PriceImage'
import SummerImage from './SummerImage/SummerImage'
import ImageList from './ImageList/ImageList'
import BottomImage from './BottomImage/BottomImage'

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      <HeaderImage/>
      <PriceImage/>
      <SummerImage/>
      <ImageList/>
      <BottomImage/>
    </View>
  )
}

export default TrendingSection

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})
