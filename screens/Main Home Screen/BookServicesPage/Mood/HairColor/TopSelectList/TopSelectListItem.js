import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TopSelectListItem = ({item,lengthOfItem,onClickHandler}) => {
  const {title,id,checked} = item
  let idNumber = Number(id)
  return (
    <TouchableOpacity onPress={onClickHandler} style={styles.container}>
      <Text style={[styles.text,checked && styles.textStyle]}>{title}</Text>
      {checked && <View style={styles.borderLine}></View>}
    </TouchableOpacity> 
  )
}

export default TopSelectListItem

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:8,
    position: 'relative',
  },
  text:{
    textAlign:'center',
    fontSize:15,
    borderWidth:1,
    borderColor:'#ddd',
    paddingHorizontal:16,
    paddingVertical:6,
    borderRadius:5,
    color:'#1e1e1e',
    fontFamily:'OpenSans-Medium',
  },
  textStyle:{
    backgroundColor:'#2f2f2f',
    
    color:'#fff',
  },
  borderLine:{
    position:'absolute',
    top:'65%',
    width:'60%',
    height:2,
    backgroundColor:'#a64d4f',
  },
})
