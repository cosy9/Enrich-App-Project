import React from 'react'
import { Image, StyleSheet, Text,TouchableOpacity,View } from 'react-native'

const ShopByConcernItem = ({item}) => {
  const {title,icon} = item;
  return (
          <View style={styles.itemView}>
            <View style={styles.imageView}>
            <Image  source={icon} style={styles.Image}/>
            <Text style={styles.textBold}>{title}</Text>
            </View>
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
    borderRadius:5,
    marginBottom:4,
    elevation:4,
  },
  Image:{
    width:60,
    height: 78,
    borderRadius:5,
  },
  textBold:{
    fontSize:13.2,
    fontWeight:'bold',
    backgroundColor: '#2f2f2f',
    color:'#fff',
    width:'100%',
    textAlign:'center',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    paddingHorizontal:4,
    paddingVertical:8,
  },
})

export default ShopByConcernItem;