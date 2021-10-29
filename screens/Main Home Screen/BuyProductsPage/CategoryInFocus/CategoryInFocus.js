import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryInFocusItem from './CategoryInFocusItem'
import categoryInFocusData from '../../../../assets/data/categoryInFocusData'

const CategoryInFocus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>Categories In Focus</Text>
      <View style={styles.itemWrapper}>
      {
        categoryInFocusData.map((item)=>{
          return ( <CategoryInFocusItem key={item.id} item={item}/>)
        })
      }
      </View>
    </View>
  )
}

export default CategoryInFocus

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },
  topText:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:20,
    paddingTop:20,
    paddingBottom:4,
  },
  itemWrapper:{
    alignItems: 'center',
  }
})
