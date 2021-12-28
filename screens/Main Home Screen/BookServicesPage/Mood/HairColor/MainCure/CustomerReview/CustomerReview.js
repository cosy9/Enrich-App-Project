import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import customerReviewData from '../../../../../../../assets/data/customerReviewData';
import AnIcon from 'react-native-vector-icons/AntDesign';
import FlatListItem from './FlatListItem';

const CustomerReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.topLine}></View>
      <Text style={styles.topTitle}>Customer Reviews (62)</Text>
      {
        customerReviewData.map((item)=>{
          return(<FlatListItem key={item.id} item={item}/>)
        })
      }
      <TouchableOpacity style={styles.bottomTitleContainer}>
      <Text style={styles.bottomTitle}>View all 62 reviews</Text>
      <AnIcon style={styles.icon} name="right" />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default CustomerReview

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    width:'100%',
    paddingBottom:0,
  },
  wrapper:{
    width:'90%',
    alignSelf:'center',  
  },
  topLine:{
    width:'100%',
    height:2,
    backgroundColor:'#ddd',
    marginBottom:10,
  },
  topTitle:{
    fontFamily:'OpenSans-Bold',
    marginVertical:7,
    fontSize:17,
  },
  bottomTitleContainer:{
    flexDirection:'row',
    alignItems: 'center',
    height:40,
    marginVertical:12,
  },
  bottomTitle:{
    fontFamily:'OpenSans-Bold',
  },
  icon:{
    fontSize:12,
    alignSelf:'center',
    marginTop:2,
    marginLeft:2,
  },
})
