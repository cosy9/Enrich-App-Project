import React from 'react'
import {Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const FlatListItem = ({item}) => {
  const {image,title} = item;
  return (
    <View style={styles.item}>
      <Image
        source={image}
        style={styles.bgImage}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff',
    marginHorizontal:9,
    width:137,
    height: 216,
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 8,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderBottomColor:'#ddd',
    borderBottomWidth:2,
  },
  bgImage:{
    width:137,
    height:183,
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
})
