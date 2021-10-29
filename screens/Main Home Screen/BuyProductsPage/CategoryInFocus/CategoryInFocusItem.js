import React from 'react'
import { Image, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'

const CategoryInFocusItem = ({item}) => {
  const {title,text,btnText,backgroundColor,image} = item;
  return (
    <View style={[styles.item,{backgroundColor: backgroundColor}]}>
      <View style={styles.textView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btn}>{btnText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderStyle}></View>
      <Image style={styles.image} source={image}/>
    </View>
  )
}

export default CategoryInFocusItem

const styles = StyleSheet.create({
  item:{
    marginTop:17,
    width: '92%',
    borderRadius:5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView:{
    width: '33%',
    paddingLeft:18,
    paddingRight:2,
  },
  title:{
    fontSize:23,
    fontWeight: 'bold',
  },
  text:{
    fontSize:17,
    fontWeight: 'bold',
    lineHeight:29,
  },
  btnContainer:{
    alignSelf:'flex-start',
    marginTop:16,
  },
  btn:{
    color:'#2f2f2f',
    backgroundColor:'#fff',
    fontSize:10,
    fontWeight:'bold',
    padding:6,
    textTransform:'uppercase',
  },
  image:{
    flexGrow: 1,
    margin:5,
    width:218,
    height:200,
  },
  borderStyle:{
    position:'absolute',
    right:10,
    zIndex:2,
    width:234,
    height:192,
    borderWidth:1,
    borderColor:'#fff',
  }
})
