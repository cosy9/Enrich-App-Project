import React, { useState } from 'react'
import { ImageBackground,Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign';
import  FaIcon  from 'react-native-vector-icons/FontAwesome';

const FlatListItem = ({item}) => {
  const {title,text1,text2,price,image} = item;
  return (
    <View style={styles.item}>
      <Image
        source={image}
        style={styles.bgImage}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2 ?? ''}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#f2f2f2',
    marginHorizontal:9,
    width:165,
    height: 299,
    borderRadius:10,
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 4,
  },
  bgImage:{
    width:165,
    height:200,
    borderRadius:10,
  },
  icon:{
    fontSize:26,
    color:'#000',
    marginRight:10,
    marginTop:7,
  },
  title:{
    fontSize:13.7,
    marginTop:6,
    marginLeft:9,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#000',
    marginBottom:2,
  },
  text1:{
    fontSize:12.2,
    color:'#000',
    marginLeft:9,
    fontStyle:'italic',
    marginBottom:2,
  },
  text2:{
    fontSize:12.5,
    marginLeft:9,
    color:'#000',
    fontStyle:'italic',
    marginBottom:4,
  },
  price:{
    fontWeight:'bold',
    marginLeft:9,
    fontSize:12.6,
    color:'#ed9981',
  },
})
