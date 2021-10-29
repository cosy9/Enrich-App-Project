import React from 'react'
import { FlatList, Linking, StyleSheet, Text, View } from 'react-native'
import luxuriousServicesData from '../../../../assets/data/luxuriousServicesData'
import FlatListItem from './FlatListItem'

const LuxuriousServices = () => {
  return (
    <View style={styles.container}>
    <View style={styles.darkBackground}></View>
      <View style={styles.popularView}>
        <Text style={styles.popularText}>Luxurious Services To Spoil You</Text>
        <Text style={styles.viewText} onPress={()=>Linking.openURL('https://google.com')}>View All</Text>
      </View>
      <View style={styles.flatListView}>
      <FlatList
        data={luxuriousServicesData} 
        showHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => <FlatListItem item={item} />}
      />
      </View>
  </View>
  )
}

export default LuxuriousServices

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingBottom:10,
    paddingTop:16,
    backgroundColor:"#e5edffa1",
    position:'relative',
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
    color:'#fff',
    fontSize:18,
    marginLeft:14,
  },
  viewText:{
    color:'#ac5137',
    textDecorationLine: 'underline',
    fontSize:15.7,
    fontWeight:'bold',
  },
  darkBackground:{
    backgroundColor:'#2b2a29',
    position:'absolute',
    width:'100%',
    top:10,
    height:250,
  },
  flatListView:{
    flex: 1,
    height: 320,
  },
})
