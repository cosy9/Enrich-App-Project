import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ShopByBrandItem = ({item}) => {
  const {image} = item
  return (
    <TouchableOpacity style={styles.itemView}>
      <Image source={image} style={styles.Image}/>
    </TouchableOpacity>
  )
}

export default ShopByBrandItem

const styles = StyleSheet.create({
  itemView:{
    width: '27.5%',
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    height:115,
    margin:10,
    elevation:5,
  },
  textBold:{
    fontSize:13.8,
    fontWeight:'bold',
    marginTop:4,
  },
  Image:{
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius:8,
  },
  textView:{
    marginTop:7,
    marginBottom:10,
  },
  text1:{
    fontSize:13,
    marginBottom:3,
    fontFamily:'OpenSans-Medium',
  },
})
