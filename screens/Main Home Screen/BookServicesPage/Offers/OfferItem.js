import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const OfferItem = ({item}) => {
  const {title1,title2,text1,image} = item;
  return (
          <View style={styles.itemView}>
            <Image source={image} style={styles.Image}/>
            <View style={styles.textView}>
              <Text style={styles.textBold}>{title1}</Text>
              <Text style={styles.textBold}>{title2}</Text>
              <Text style={styles.text1}>{text1}</Text>
            </View>
          </View>
  )
}


const styles = StyleSheet.create({
  itemView:{
    width: '43.5%',
    height:280,
    margin:8,
  },
  textBold:{
    fontSize:13.8,
    fontWeight:'bold',
    marginTop:4,
  },
  Image:{
    width: '100%',
    height: 200,
    borderRadius:8,
  },
  textView:{
    marginTop:7,
    marginBottom:10,
  },
  text1:{
    fontSize:13,
    marginBottom:3,
    fontFamily:'OpenSans-Medium',
  },
})

export default OfferItem;