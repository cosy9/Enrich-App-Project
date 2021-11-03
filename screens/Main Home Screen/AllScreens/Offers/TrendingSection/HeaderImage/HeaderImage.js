import React from 'react'
import { ImageBackground,StyleSheet, Text, View,TouchableOpacity, } from 'react-native'

const HeaderImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.bgImage} source={require('../../../../../../assets/Images/OfferImages/bgImg.jpg')}>
          <Text style={styles.text1}>
            Get
          </Text>
          <Text style={styles.title}>
            Flat 10% Off
          </Text>
          <Text style={styles.mdText}>
            On All Beauty Services*
          </Text>
          <TouchableOpacity style={styles.btnContainer} >
            <Text style={styles.btnText}>SHOP NOW</Text>
          </TouchableOpacity>
          <Text style={styles.text2}>
            *Offer valid For Enrich members only
          </Text>
        </ImageBackground>
      </View>
    </View>
  )
}

export default HeaderImage

const styles = StyleSheet.create({
  container:{
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#f5f6f8',
    marginBottom:12,
  },
  imageContainer:{
    width: '100%',
  },
  bgImage:{
    width: '100%',
    height:240,
    marginTop:24,
    justifyContent: 'center',
    alignItems:'center',
    position:'relative',
  },
  text1:{
    fontSize:16.6,
    fontFamily:'OpenSans-Light',
    color:'#fff',
    marginBottom:10,
  },
  title:{
    fontFamily:'OpenSans-Bold',
    fontSize:24,
    color:'#fff',
  },
  btnText:{
    fontSize:11,
    color:'#444444',
    fontFamily:'OpenSans-Bold',
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:8,
    marginTop:17,
    textTransform:'uppercase',
  },
  mdText:{
    fontSize:14.0,
    color:'#fff',
    fontFamily:'OpenSans-Light',
  },
  text2:{
    fontSize:10.6,
    fontFamily:'OpenSans-Light',
    color:'#fff',
    marginTop:10,
  },
})
