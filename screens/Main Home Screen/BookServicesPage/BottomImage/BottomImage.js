import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BottomImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle={{opacity:0.3}} style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/bottomBg.jpg')}>
          <Image style={styles.iconImage} source={require('../../../../assets/Images/Book_Now_Images/iconicBadge.png')}/>
          <Image
            style={styles.logoImage}
            source={require('../../../../assets/adaptive-icon-enrich.png')}
          />
          <Text style={styles.textNormal}>Enrich Is Proud To Receive</Text>
          <Text style={styles.textBold}>The Economic Times Iconic Brands Award,2021</Text>
      </ImageBackground>
    </View>
  )
}

export default BottomImage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#e5edffa1",
    width:'100%',
    alignItems: 'center',
    paddingBottom:37,
    paddingTop:30,
  },
  bgImage:{
    width:360,
    height:260,
    paddingLeft:10,
    paddingTop:10,
    alignItems: 'center',
  },
  iconImage:{
    width:100,
    height:100,
  },
  logoImage:{
    width:260,
    height:80,
  },
  textBold:{
    fontSize:15,
    fontWeight: 'bold',
  },
  textNormal:{
    fontSize:18,
    fontFamily:'OpenSans-SemiBold',
    marginTop:2,
  },
})
