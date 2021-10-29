import React from 'react'
import {StyleSheet, Text, View,Image } from 'react-native'

const FlatListItem = ({item}) => {
  const {text1,text2,image} = item;
  return (
    <View>
      <Image
        source={image}
        style={styles.bgImage}
        imageStyle={{borderRadius: 10,opacity: 0.88}}
      >
      </Image>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>

    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  bgImage:{
    marginTop:20,
    width: 290,
    height: 200,
    marginHorizontal:13,
    justifyContent: 'flex-end',
    alignItems:'center',
  },
  text1:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    color:'#000',
  },
  text2:{
    fontSize:20,
    marginBottom:9,
    color:'#000',
    textAlign:'center',
  }
})
