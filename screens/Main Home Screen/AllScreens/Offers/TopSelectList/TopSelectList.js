import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import topSelectListData from '../../../../../assets/data/topSelectListData'
import TopSelectListItem from './TopSelectListItem'

const TopSelectList = () => {
  const [list,setList] = useState(topSelectListData)
  let lengthOfItem = topSelectListData.length
  const updateChecked = (valueIndex) =>{
    let array = [...list]
    array.map((item,index) =>{  
      index === valueIndex ? (array[index]['checked']=!array[index]['checked']):(array[index]['checked']=false)
    })
    setList(array)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
      >
        {list.map((item,index)=>{
            return <TopSelectListItem key={item.id} item={item} index={index} lengthOfItem={lengthOfItem}  onClickHandler={()=>updateChecked(index)} />
        })}
      </ScrollView>
    </View>
  )
}

export default TopSelectList

const styles = StyleSheet.create({
  container:{
    height:50,
    backgroundColor:'#fff',
    elevation:2,
  },
})
