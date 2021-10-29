import React from 'react'
import {StyleSheet, Text, View,Image } from 'react-native'

const FlatListItem = ({item}) => {
  const {text1,text2,image1,image2,image3} = item;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image1}
          style={styles.bgImage}
          imageStyle={{opacity: 0.88}}
        />
        <View style={styles.smallImages}>
          <Image source={image2} style={styles.image2} />
          <Image source={image3} style={styles.image3} />
        </View>
      </View>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>

    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    marginHorizontal:13,
    width:231,
    height:280,
  },
  bgImage:{
    width: 125,
    height: 215,
  },
  imageContainer:{
    flexDirection:'row',
    alignItems: 'flex-start',
  },
  smallImages:{
    width: 104,
    height: 215,
  },
  image2:{
    width: 101.7,
    height: 120,
    marginLeft:4,
    marginBottom:4,
  },
  image3:{
    width: 101.7,
    height: 92,
    marginLeft:4,
  },
  text1:{
    fontSize:22,
    paddingTop:4,
    fontWeight:'bold',
    textAlign:'center',
    color:'#000',
  },
  text2:{
    fontSize:18,
    paddingBottom:10,
    color:'#000',
    textAlign:'center',
  }
})
