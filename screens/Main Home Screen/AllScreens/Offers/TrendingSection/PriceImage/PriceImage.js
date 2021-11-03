import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity } from 'react-native'


const PriceImage = () => {
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageData}>
                <View style={styles.leftText}>
                  <Image style={styles.logoImage} source={require('../../../../../../assets/Images/Book_Now_Images/logo/bornEthical.jpg')}/>
                  <Text style={styles.title}>REFRESH YOUR SKIN THE BORN ETHICAL WAY</Text>
                  <Text style={styles.text}>Relaxing Facials That Tighten,Purify And Rejuvenate</Text>
                  <View style={styles.priceView}>
                    <Text style={styles.priceText}>₹ 1250</Text>
                    <Text style={styles.priceDisCount}>₹ 900</Text>
                    <Text style={styles.triangle}></Text>
                  </View>
                  <TouchableOpacity style={styles.btnDiv}>
                    <Text style={styles.btnText}>BOOK NOW</Text>
                  </TouchableOpacity>
                    <Text style={styles.terms}>*Rates mentioned are for members before tax</Text>
                </View>
                <View style={styles.imageView}>
                  <Image style={styles.image} source={require('../../../../../../assets/Images/2.jpg')} />
                </View>
            </View>
        </View>
    )
}

export default PriceImage

const styles = StyleSheet.create({
    container: {
      height:260,
      marginBottom:10,
    },
    imageData:{
        height:240,
        flexDirection:'row',
        height:'100%',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor:'#fff'
    },
    leftText:{
      width:'50%',
      paddingLeft:12,
    },
    logoImage:{
      width:50,
      height:60,
      resizeMode:'contain',
      marginBottom:4,
    },  
    title:{
      color:'#000',
      fontSize:14,
      fontWeight:'bold',
      textTransform: 'uppercase',
      marginBottom:4,
    },
    text:{
      color:'#565455',
      fontWeight:'bold',
      fontSize:12,
      marginBottom:10,
      width:'99%',
    },
    priceView:{
      flexDirection:'row',
      alignItems: 'center',
      marginTop:5,
      marginBottom:10,
      marginLeft:-12,
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
      alignSelf:'flex-start',
    },
    btnText:{
      color:'#fff',
      fontSize:11,
      paddingHorizontal:4,
      textTransform: 'uppercase',
    },
    terms:{
      fontSize:8,
      marginTop:4,
      paddingBottom:10,
    },
    imageView:{
      width:156,
      height:'100%',
      width:'50%',
    },
    image:{
      width:'100%',
      height:'100%',
      resizeMode:'contain',
      borderWidth:10,
      borderColor:'#ffeccc',
    },
    })
