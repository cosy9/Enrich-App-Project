import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'

const LogoListItem = ({item}) => {
  const {title,image,color,} = item
  return (<View style={styles.container}>
    <View style={styles.contentView}>
        <Image style={styles.image} source={image} />
        <Text style={[styles.text,{color:color}]}>{title}</Text>
    </View> 
  </View>)
}

export default LogoListItem

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:1,
    position: 'relative',
  },
  contentView:{
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height:'100%',
  },  
  text:{
    textAlign:'center',
    fontSize:14,
    paddingBottom:4,
    width:'82%',
    // alignSelf: 'center',
  },
  image:{
    width:55,
    height:55,
    // alignSelf:'center',
  }
})
