import React from 'react'
import { FlatList, Linking, StyleSheet, Text, View } from 'react-native'
import buyProductsTopCategoryData from '../../../../assets/data/buyProductsTopCategoryData'
import FlatListItem from './FlatListItem'

const TopCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bgColor}></View>
      <View style={styles.popularView}>
        <Text style={styles.popularText}>Top Categories</Text>
        <Text style={styles.viewText} onPress={()=>Linking.openURL('https://google.com')}>View All</Text>
      </View>
      <View style={styles.flatListView}>
      <FlatList
        data={buyProductsTopCategoryData} 
        keyExtractor={(item)=> item.id}
        horizontal
        showHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item} />}
      />
      </View>
  </View>
  )
}

export default TopCategory

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:16,
    paddingBottom:30,
    position:'relative',
  },
  bgColor:{
    position:'absolute',
    width:'100%',
    height:275,
    backgroundColor:'#f5f6f8',
    // backgroundColor:'red',
  },
  textTop:{
    fontSize:23,
    fontWeight:'bold',
    color:'#fff',
    textTransform:'capitalize',
    paddingVertical:10,
    paddingLeft:10,
    width:'72%',
    lineHeight:36,
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
    color:'#2b2a29',
    fontSize:18,
    marginLeft:14,
  },
  viewText:{
    color:'#ac5137',
    textDecorationLine: 'underline',
    fontSize:15.7,
    fontWeight:'bold',
  },
  flatListView:{
    paddingBottom:4,
    // backgroundColor:'#fff',
  }
})
