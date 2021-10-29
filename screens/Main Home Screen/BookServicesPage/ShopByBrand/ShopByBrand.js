import React from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import ShopByBrandItem from './ShopByBrandItem'
import shopByBrandData from '../../../../assets/data/shopByBrandData'

const ShopByBrand = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popularView}>
        <Text style={styles.popularText}>Shop By Brand</Text>
        <Text style={styles.viewText} onPress={()=>Linking.openURL('https://google.com')}>View All</Text>
      </View>
      <View style={styles.FlexItemWrap}>
      {shopByBrandData.map((item)=>{
        return <ShopByBrandItem key={item.id} item={item}/>
      })}
      </View>
    </View>
  )
}

export default ShopByBrand

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#e5edffa1",
    paddingBottom:20,
  },
  topText:{
    fontSize:19.5,
    fontWeight:"bold",
    paddingLeft:20,
    marginVertical:20,
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  popularView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:20,
    paddingBottom:26,
    width:'95%',
  },
  popularText:{
    fontWeight:'bold',
    color:'#000',
    fontSize:20,
    marginLeft:16,
  },
  viewText:{
    color:'#ac5137',
    textDecorationLine: 'underline',
    fontSize:15.7,
    fontWeight:'bold',
  },
})
