import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ReviewItem = ({item}) => {
  const {name,image,text,bgColor} = item
  return (
    <View style={styles.item}>
      <View style={styles.nameImg}>
        <Text style={styles.name}>{name}</Text>
        <Image
          source={image}
          style={styles.bgImage}
        />
      </View>
      <Text style={[styles.text1,{backgroundColor:bgColor}]}>{text}</Text>
  </View>
  )
}

export default ReviewItem

const styles = StyleSheet.create({
  item:{
    marginHorizontal:9,
    width:285,
    paddingBottom:7,
  },
  nameImg:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position:'relative',
    top:16,
    zIndex:2,
  },
  bgImage:{
    width:80,
    height:80,
    borderRadius:50,
  },
  icon:{
    fontSize:26,
    color:'#000',
    marginRight:10,
    marginTop:7,
  },
  name:{
    fontSize:16.7,
    marginLeft:9,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'#000',
  },
  text1:{
    fontSize:11,
    lineHeight:20,
    borderRadius:10,
    paddingTop:40,
    paddingHorizontal:9,
    paddingBottom:19,
    color:'#fff',
    marginLeft:9,
    marginBottom:2,
  },
})
