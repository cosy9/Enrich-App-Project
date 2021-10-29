import React from 'react'
import { Image, StyleSheet, Text,View } from 'react-native'


const TopOffersItem = ({item}) => {
  const {title,text2,image} = item;
  return (
          <View style={styles.itemView}>
            <Image imageStyle={{borderRadius:10,}} source={image} style={styles.Image}/>
            <View style={styles.textView}>
              <Text style={styles.textBold}>{title}</Text>
              <Text style={styles.text2}>{text2}</Text>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    margin:8,
  },
  textBold:{
    fontSize:14.2,
    fontWeight:'bold',
  },
  Image:{
    width: '100%',
    height: 200,
    borderRadius:5,
  },
  textView:{
    marginTop:7,
    marginBottom:10,
  },
  text2:{
    fontSize:14,
    marginBottom:3,
    fontFamily:'OpenSans-Medium'
  },
})

export default TopOffersItem;