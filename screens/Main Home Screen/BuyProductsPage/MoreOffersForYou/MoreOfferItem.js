import React from 'react'
import { Image, StyleSheet, Text,TouchableOpacity,View } from 'react-native'

const MoreOfferItem = ({item}) => {
  const {title,image,logoImage} = item;
  return (
          <View style={styles.itemView}>
            <View style={styles.imageView}>
            <Image style={styles.logoImage} source={logoImage} />
            <Image  source={image} style={styles.Image}/>
            </View>
            <Text style={styles.textBold}>{title}</Text>
          </View>
  )
}

const styles = StyleSheet.create({
  itemView:{
    width: '28.5%',
    margin:8,
  },
  imageView:{
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal:6,
    paddingBottom:6,
    borderRadius:5,
    marginBottom:4,
    elevation:4,
  },
  logoImage:{
    width:80,
    height:30,
    marginVertical:4,
    resizeMode:'contain',
  },
  Image:{
    width:102,
    height: 140,
    borderRadius:5,
  },
  textBold:{
    fontSize:14.2,
    fontWeight:'bold',
  },
})

export default MoreOfferItem;