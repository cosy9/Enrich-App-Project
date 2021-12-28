import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ImageListItem = ({item}) => {
  const {title,text2,text3,image,imageIcon,floatText} = item;
  return (
          <View style={styles.itemView}>
            <ImageBackground imageStyle={{borderRadius:5}} source={image} style={styles.Image}>
              {imageIcon && <Image style={styles.imageIcon} source={imageIcon} />}
              {floatText && <Text style={styles.floatText}>{floatText}</Text>}
            </ImageBackground>
            <View style={styles.textView}>
              {title && <Text style={styles.textBold}>{title}</Text>}
              <Text style={styles.text2}>{text2}</Text>
              {text3 && <Text style={styles.text2}>{text3}</Text>}
            </View>
          </View>
  )
}


const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    margin:8,
  },
  imageIcon:{
    width:60,
    height:60,
    resizeMode:'contain',
    alignSelf:'center',
  },
  floatText:{
    fontSize:15,
    marginTop:5,
    width:'90%',
    alignSelf:'center',
    textAlign:'center',
    fontFamily:'OpenSans-Bold',
    color:'#000',
  },
  textBold:{
    fontSize:15,
    fontWeight:'bold',
  },
  Image:{
    width: 156,
    height: 200,
  },
  textView:{
    marginTop:7,
  },
  text2:{
    fontSize:12.7,
    fontFamily:'OpenSans-Medium'
  },
})

export default ImageListItem;