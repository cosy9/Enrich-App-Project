import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

import AnIcon from 'react-native-vector-icons/AntDesign';

const CategoryList = ({item,handleCategory,length}) => {
  const {title,icon,id} = item
  let idNo = Number(id)
  let isLastNumber = idNo === length ? true : false;
  return (
    <TouchableOpacity onPress={()=>handleCategory(title)} style={[styles.categoryItem,{borderBottomWidth:isLastNumber ? 0 : 0.7 }]}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <AnIcon style={styles.categoryIcon} name={icon} />
    </TouchableOpacity>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  categoryItem:{
    flex: 1,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:13,
    height:70,
    // borderBottomWidth:0.6,
    borderBottomColor:'#ddd',
  },
  categoryTitle:{
    fontSize:15,
    fontWeight:'bold',
  },
  categoryIcon:{
    fontSize:15,
  }
})
