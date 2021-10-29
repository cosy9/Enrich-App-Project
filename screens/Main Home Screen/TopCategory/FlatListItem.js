import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const FlatListItem = ({item}) => {
  const {text1,text2,image} = item;
  return (
    <ImageBackground
      source={image}
      style={styles.bgImage}
      imageStyle={{borderRadius: 10,opacity: 0.88}}
    >
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </ImageBackground>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  bgImage:{
    marginTop:20,
    width: 290,
    height: 200,
    marginLeft:20,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  text1:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
  },
  text2:{
    fontSize:22,
    marginBottom:9,
    color:'white',
  }
})
