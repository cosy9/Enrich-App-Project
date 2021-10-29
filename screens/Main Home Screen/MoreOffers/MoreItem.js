import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const MoreItem = ({item}) => {
  const {title,text2,text3,image,imageIcon} = item;
  return (
          <View style={styles.itemView}>
            <View style={styles.imageView}>
            <Image source={imageIcon} style={styles.imageIcon} />
              <Image ImageStyle={{borderRadius:10,}} source={image} style={styles.Image}/>
            </View>
            <View style={styles.textView}>
              <Text style={styles.textBold}>{title}</Text>
              <Text style={styles.text2}>{text2}</Text>
              <Text style={styles.text3}>{text3}</Text>
            </View>
          </View>
  )
}


const styles = StyleSheet.create({
  itemView:{
    width: '30.1%',
    height:300,
    margin:5,
  },
  textBold:{
    fontSize:14,
  },
  imageView:{
    width: '95%',
    padding:7, 
    backgroundColor:'#fff',
    alignItems:'center',
  },
  imageIcon:{
    width:90,
    height:33,
    marginBottom:4,
    paddingHorizontal:12,
    resizeMode:'contain',
    backgroundColor:'red'
  },
  Image:{
    width: '100%',
    height:140,
    borderRadius:5,
  },
  textView:{
    marginTop:7,
    marginBottom:10,
    marginLeft:4,
    width:'100%',
  },
  text2:{
    fontSize:14,
    marginBottom:3,
  },
  text3:{
    fontSize:14,
  },
})

export default MoreItem;