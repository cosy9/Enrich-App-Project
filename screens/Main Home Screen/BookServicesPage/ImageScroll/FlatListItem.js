import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity } from 'react-native'


const FlatListItem = ({item}) => {
    const{title,image,text,price,discountPrice,btnText,terms} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageData}>
                <View style={styles.leftText}>
                  <Text style={styles.title}>{title}</Text>
                  <Text style={styles.text}>{text}</Text>
                  <View style={styles.priceView}>
                    <Text style={styles.priceText}>{price}</Text>
                    <Text style={styles.priceDisCount}>{discountPrice}</Text>
                    <Text style={styles.triangle}></Text>
                  </View>
                  <TouchableOpacity style={styles.btnDiv}>
                    <Text style={styles.btnText}>{btnText}</Text>
                  </TouchableOpacity>
                    <Text style={styles.terms}>{terms}</Text>
                </View>
                <View style={styles.imageView}>
                  <Image style={styles.image} source={image} />
                </View>
            </View>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        elevation:3,
        height:255,
    },
    imageData:{
        flexDirection:'row',
        height:'100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor:'#ffffff6e'
    },
    leftText:{
      width:'55%',
      // backgroundColor:'green',
    },  
    title:{
      color:'#000',
      fontSize:20,
      fontWeight:'bold',
      textTransform: 'uppercase',
      marginBottom:4,
    },
    text:{
      color:'#bebcbd',
      fontWeight:'bold',
      fontSize:15,
    },
    priceView:{
      flexDirection:'row',
      alignItems: 'center',
      marginLeft:-8,
      marginTop:5,
    },
    triangle:{
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 16,
      borderRightWidth: 20,
      borderBottomWidth: 16,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: '#fff',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      left:-19,
    },
    priceText:{
      backgroundColor:'#b17a2b',
      color:'#fff',
      textDecorationLine: 'line-through',
      textDecorationColor:'red',
      paddingHorizontal:8,
      paddingVertical:3,
      fontSize:18,
    },
    priceDisCount:{
      color:'#fff',
      backgroundColor:'#b17a2b',
      paddingVertical:3,
      fontSize:18,
      paddingRight:40,
    },
    btnDiv:{
      marginTop:8,
      marginLeft:10,
      marginBottom:8,
      backgroundColor:'#000',
      padding:6,
      width:'40%',
    },
    btnText:{
      color:'#fff',
      textTransform: 'uppercase',
    },
    terms:{
      fontSize:10,
      marginTop:4,
      paddingBottom:10,
    },
    imageView:{
      width:156,
      height:'98%',
      marginRight:-10,
    },
    image:{
      width:'100%',
      height:'100%',
      marginTop:-2,
      borderWidth:10,
      borderColor:'#ffeccc',
    },
    })
