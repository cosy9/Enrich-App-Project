import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconsItem = ({item}) => {
  const {title,icon} = item;
  // console.log(title,icon);
  return (
    <TouchableOpacity style={styles.iconItems}>
      <MaIcon style={styles.icon} name={icon} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default IconsItem

const styles = StyleSheet.create({
  iconItems:{
    width:110,
    height:140,
    backgroundColor:'#fff',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:3,
  },
  icon:{
    fontSize:34,
    backgroundColor:'#f5f6f8',
    color:'#000',
    borderRadius:50,
    padding:12,
  },
  title:{
    marginTop:14,
    width:'80%',
    fontWeight:'bold',
    fontSize:15,
    textAlign:'center',
  }
})
