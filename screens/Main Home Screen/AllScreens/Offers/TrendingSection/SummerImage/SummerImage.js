import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions,ImageBackground,TouchableOpacity } from 'react-native'

const SummerImage = () => {
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
          <ImageBackground style={styles.bgImage} source={require('../../../../../../assets/Images/OfferImages/yellowBgImage.jpg')}>
            <View style={styles.textContainer}>
              <Text style={styles.text1}>The</Text>
              <Text style={styles.title}>Summer</Text>
              <Text style={styles.text2}>Skin Edit</Text>
              <Text style={styles.discount}>Flat 10% Off</Text>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>SHOP NOW</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          
        </View>
    )
}

export default SummerImage

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginBottom:10,
  },
  bgImage:{
    width: '100%',
    height:240,
  },
  textContainer:{
    height:'100%',
    width:'45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1:{
    color:'#fff',
    fontSize:22,
    fontFamily:'OpenSans-ExtraBoldItalic',
    marginBottom:-9,
  },
  title:{
    color:'#fe6e04',
    fontSize:28,
    fontFamily:'OpenSans-ExtraBold',
  },
  text2:{
    color:'#fff',
    fontSize:22,
    fontFamily:'OpenSans-ExtraBoldItalic',
    marginTop:-6,
  },
  discount:{
    color:'#050400',
    fontSize:20,
    fontWeight:'bold',
  },
  btnContainer:{
    marginTop:12,
    backgroundColor:'#fff',
    paddingVertical:6,
    paddingHorizontal:15,
  },
  btnText:{
    color:'#272727',
    fontFamily:'OpenSans-Bold',
    textTransform: 'uppercase',
  },
})
