import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TopProfessionalItem = ({item}) => {
  const {image} = item
  return (
    <TouchableOpacity style={styles.itemView}>
      <Image source={image} style={styles.Image}/>
    </TouchableOpacity>
  )
}

export default TopProfessionalItem

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
  Image:{
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderRadius:8,
    backgroundColor: '#fff'
  },
})
