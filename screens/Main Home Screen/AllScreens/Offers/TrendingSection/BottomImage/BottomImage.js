import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomImage = () => {
  return (
    <ImageBackground style={styles.imageBackground} source={require('../../../../../../assets/Images/OfferImages/bottomImage.png')}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Earn 25%</Text>
        <Text style={styles.textBold}>Reward Points</Text>
        <Text style={styles.textLight}>When You Buy Products*</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.smallText}>*Redeem points to get discount on products and services. Valid for existing customers</Text>
    </ImageBackground>
  )
}

export default BottomImage

const styles = StyleSheet.create({
  imageBackground:{
    width:'100%',
    height:240,
    resizeMode:'contain',
  },
  textContainer:{
    marginLeft:14,
    marginBottom:'auto',
  },
  title:{
    fontFamily:'LibreBaskerville-Bold',
    fontSize:30,
    marginTop:30,
  },
  textBold:{
    fontFamily:'OpenSans-Bold',
    fontSize:19,
    marginVertical:2,
  },
  textLight:{
    fontFamily:'OpenSans-Bold',
    fontSize:15,
    marginBottom:19,
  },
  btnContainer:{
    alignSelf:'flex-start',
  },
  btnText:{
    alignSelf:'flex-start',
    color:'#fff',
    backgroundColor:'#1e1e1e',
    paddingVertical:8,
    paddingHorizontal:16,
    textTransform:'uppercase',
    letterSpacing:2,
  },
  
smallText:{
  fontSize:9,
  fontFamily:'OpenSans-Light',
  marginBottom:8,
  marginLeft:14,

},
})
