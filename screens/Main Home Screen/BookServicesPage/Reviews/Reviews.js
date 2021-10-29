import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ReviewItem from './ReviewItem'
import reviewsData from '../../../../assets/data/reviewsData'

const Reviews = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.popularText}>Sharing Some Customer Love</Text>
      <View style={styles.flatListView}>
      <FlatList
        data={reviewsData} 
        showHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item)=> item.id}
        renderItem={({item}) => <ReviewItem item={item} />}
      />
      </View>
  </View>
  )
}

export default Reviews

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingBottom:20,
    paddingTop:16,
    backgroundColor:"#e5edffa1",
    position:'relative',
  },
  popularText:{
    fontWeight:'bold',
    color:'#2b2a29',
    fontSize:19,
    marginLeft:20,
    marginBottom:10,
  },
  flatListView:{
    flex: 1,
  },
})
