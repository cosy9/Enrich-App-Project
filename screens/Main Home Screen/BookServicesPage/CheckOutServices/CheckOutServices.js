import React from 'react'
import { FlatList, Linking, StyleSheet, Text, View } from 'react-native'
import checkOutServicesData from '../../../../assets/data/checkOutServicesData'
import FlatListItem from './FlatListItem'

const CheckOutServices = () => {
  return (
    <View style={styles.container}>
      <View style={styles.darkBackground}></View>
        <Text style={styles.textTop}>
          Check out these trending Beauty Services
        </Text>
        <View style={styles.popularView}>
          <Text style={styles.popularText}>Popular Hair Services</Text>
          <Text style={styles.viewText} onPress={()=>Linking.openURL('https://google.com')}>View All</Text>
        </View>
        <View style={styles.flatListView}>
        <FlatList
          data={checkOutServicesData} 
          keyExtractor={(item)=> item.id}
          horizontal
          showHorizontalScrollIndicator={false}
          renderItem={({item}) => <FlatListItem item={item} />}
        />
        </View>
    </View>
  )
}

export default CheckOutServices

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
    paddingBottom:20,
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
    height:340,
  },
  flatListView:{
    flex: 1,
    height: 320,
  },
})

