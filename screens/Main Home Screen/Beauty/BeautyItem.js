import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const BeautyItem = ({item}) => {
  const {title,text2,image} = item;
  return (
          <View style={styles.itemView}>
            <ImageBackground source={image} style={styles.Image}
              imageStyle={{borderRadius: 10,opacity: 0.99}}
            >
            <View style={styles.textView}>
              <Text style={styles.textBold}>{title}</Text>
              <Text style={styles.text2}>{text2}</Text>
            </View>
            <TouchableOpacity>
            <Icon name='right' style={styles.icon}/>
            </TouchableOpacity>
            </ImageBackground>
          </View>
  )
}


const styles = StyleSheet.create({
  itemView:{
    width: '43.5%',
    height:210,
    margin:8,
    borderRadius:40,
  },
  textBold:{
    fontSize:19,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#fff',
  },
  Image:{
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  textView:{
    marginTop:7,
    marginBottom:10,
    marginLeft:8,
  },
  text2:{
    fontSize:16,
    marginBottom:3,
    color:'#fff',
  },
  icon:{
    fontSize:14,
    marginBottom:10,
    color:'#000',
    backgroundColor:'#fff',
    padding:2,
    borderRadius:50,
    marginRight:9,
  },
})

export default BeautyItem;