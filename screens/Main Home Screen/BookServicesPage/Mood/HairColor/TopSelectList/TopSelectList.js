import React, { useState } from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
// import topSelectListHairData from '../../../../../../assets/data/topSelectListHairData'
import TopSelectListItem from './TopSelectListItem'

const TopSelectList = ({updateChecked,selectedData}) => {
  // const [list,setList] = useState(topSelectListHairData)
  let lengthOfItem = selectedData.length

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollStyle}
        horizontal
      >
        {selectedData.map((item,index)=>{
            return <TopSelectListItem key={item.id} item={item} index={index} lengthOfItem={lengthOfItem}  onClickHandler={()=>updateChecked(index,item.title)} />
        })}
      </ScrollView>
    </View>
  )
}

export default TopSelectList

const styles = StyleSheet.create({
  container:{
    height:65,
    paddingBottom:2,
    elevation:1,
  },
  scrollStyle:{
    height:60,
    backgroundColor:'#fff',
  }
})
