import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TopSelectListItem = ({item,lengthOfItem,onClickHandler}) => {
  const {title,id,checked} = item
  let idNumber = Number(id)
  return (
    <TouchableOpacity onPress={onClickHandler} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idNumber === lengthOfItem ? <></>:<View style={styles.line}></View>}
      {checked && <View style={styles.border}></View>}
    </TouchableOpacity> 
  )
}

export default TopSelectListItem

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:20,
    position: 'relative',
  },
  border:{
    width:50,
    height:2,
    backgroundColor:'red',
    position:'absolute',
    bottom:0,
  },
  noBorder:{
    width:60,
    height:2,
    backgroundColor:'pink',
    position:'absolute',
    bottom:0,

  },
  text:{
    textAlign:'center',
    fontSize:15,
  },
  line:{
    position:'absolute',
    backgroundColor:'#ddd',
    width:2,
    height:25,
    right:0,
  }
})
