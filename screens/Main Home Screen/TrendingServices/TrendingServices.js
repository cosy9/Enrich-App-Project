import React from 'react'
import { StyleSheet, Text,View } from 'react-native'
import trendingData from '../../../assets/data/trendingData'
import TrendingItem from './TrendingItem'

const TrendingServices = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textBold}>Trending Categories</Text>
        <View style={styles.Parentcontainer}>
          {
          trendingData.map((item)=>{
            return  <TrendingItem key={item.id} item={item} />
          })
          }
      </View>
    </View>

  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginBottom:9,
  },
  textBold:{
    marginLeft:20,
    fontSize:19,
    fontWeight:'bold',
    marginBottom:13,
  },
  Parentcontainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  
})

export default TrendingServices;