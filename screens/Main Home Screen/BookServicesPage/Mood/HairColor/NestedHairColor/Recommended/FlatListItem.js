import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/AntDesign';
import  FaIcon  from 'react-native-vector-icons/FontAwesome';

const FlatListItem = ({item}) => {
  const [isHeart,setIsHeart] = useState(false)
  const {title,text1,text2,price,off,left,image,ratings,totalReviews} = item;
  return (
    <View style={styles.item}>
      <ImageBackground
        source={image}
        style={styles.bgImage}
      >
        <TouchableOpacity onPress={() =>setIsHeart(!isHeart)}>
          { isHeart ? <Icon style={[styles.icon,{color:'red'}]} name='heart'/>:<Icon style={styles.icon} name='hearto'/>}
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.ratings}>
        <Text style={styles.ratingNumber}>{ratings}</Text>
        <FaIcon name='star' style={styles.starIcon}/>
        <Text style={styles.totalReviews}>| {totalReviews}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text1}>{title}</Text>
        <Text style={styles.text2}>{text1}</Text>
      </View>
      <Text style={styles.text3}>{text2}</Text>
      <View style={styles.off}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.priceStrike}>{price}</Text>
        <Text style={styles.offPercent}>{off}</Text>
      </View>
      {left && <Text style={styles.left}>{left?? ''}</Text>}
    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff',
    marginLeft:14,
    marginBottom:2,
    marginTop:2,
    width: 172,
    // height: 350,
    paddingHorizontal:8,
    paddingTop:6,
    elevation: 8,
  },
  bgImage:{
    width:'100%',
    height:200,
    justifyContent: 'flex-start',
    alignItems:'flex-end',
  },
  icon:{
    fontSize:26,
    color:'#000',
    marginRight:10,
    marginTop:7,
  },
  ratings:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    marginTop:9,
  },
  ratingNumber:{
    fontWeight:'bold',
    backgroundColor:'#f5f6f8',
    paddingHorizontal:5,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  starIcon:{
    fontSize:15,
    color:'yellow',
    backgroundColor:'#f5f6f8',
    paddingVertical:2,
  },
  totalReviews:{
    fontWeight:'bold',
    backgroundColor:'#f5f6f8',
    paddingHorizontal:5,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  textView:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop:4,
  },
  text1:{
    fontSize:13,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#000',
  },
  text2:{
    fontSize:12,
    color:'#000',
  },
  text3:{
    marginTop:6,
  },
  off:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop:10,
  },
  price:{
    fontWeight:'bold',
    fontSize:12.6,
  },
  priceStrike:{
    color:'#898988',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',    
    fontSize:12.6,
  },
  offPercent:{
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#eb6165',
    fontSize:12.6,
  },
  left:{
    marginTop:6,
    fontWeight:'bold',
    color:'#eb6165',
    paddingBottom:4,
    // backgroundColor:'red'
  }
})
