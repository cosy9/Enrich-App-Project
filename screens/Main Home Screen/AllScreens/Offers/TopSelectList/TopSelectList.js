import React, { useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import topSelectListData from '../../../../../assets/data/topSelectListData'
import TopSelectListItem from './TopSelectListItem'

const TopSelectList = () => {
  // const [list,setList] = useState(topSelectListData)
  let lengthOfItem = topSelectListData.length
  return (
    <View style={styles.container}>
      <ScrollView
        // data={topSelectListData} 
        // keyExtractor={(item)=> item.id}
        horizontal
        // showHorizontalScrollIndicator={false}
        // renderItem={({item,index}) => <TopSelectListItem item={item} index={index} lengthOfItem={lengthOfItem} />}
      >
        {topSelectListData.map((item,index)=>{
            return <TopSelectListItem key={item.id} item={item} index={index} lengthOfItem={lengthOfItem} />
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
