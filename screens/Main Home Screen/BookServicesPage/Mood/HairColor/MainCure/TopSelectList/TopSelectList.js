import React, { useState } from 'react'
import {ScrollView, StyleSheet, View } from 'react-native'
import topSelectListDataBookNowPage from '../../../../../../../assets/data/topSelectListDataBookNowPage'
import TopSelectListItem from './TopSelectListItem'

const TopSelectList = () => {
  const [list,setList] = useState(topSelectListDataBookNowPage)
  let lengthOfItem = topSelectListDataBookNowPage.length

  const updateChecked = (valueIndex,valueItem) =>{
    let array = [...list]
    array.map((item,index) =>{  
      index === valueIndex ? (array[index]['checked']=true):(array[index]['checked']=false)
    })
    setList(array)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
      >
        {list.map((item,index)=>{
            return <TopSelectListItem key={item.id} item={item} index={index} lengthOfItem={lengthOfItem}  onClickHandler={()=>updateChecked(index,item)} />
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
    marginBottom:2,
  },
})
