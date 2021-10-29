import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TopSelectListItem = ({item,index,lengthOfItem}) => {
  const {title,id,checked} = item
  const [titleCheck,setTitleCheck] = useState('Trending')
  let idNumber = Number(id)
  const handleClick = (title) =>{
    console.log(title);
    setTitleCheck(title)
    // console.log('value',value);
  }
  return (
    <TouchableOpacity onPress={()=>handleClick(title)} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idNumber === lengthOfItem ? <></>:<View style={styles.line}></View>}
      {titleCheck === title && <View style={styles.border}></View>}
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
    // borderBottomWidth:2,
    // borderBottomColor:'red',
    width:60,
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
