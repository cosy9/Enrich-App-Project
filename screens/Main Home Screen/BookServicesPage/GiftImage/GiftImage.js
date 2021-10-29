import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const GiftImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/whitPinkBg.jpg')}>
        <View style={styles.giftView}>
          <Text style={styles.textBold}>Share The</Text>
          <Text style={styles.giftText}>Gift</Text>
          <Text style={styles.textBold}>Of Beauty</Text>
        </View>
        <View style={styles.termsView}>
          <Text style={styles.termsText}>* Lorem ipsum dolor sit amet consectetur </Text>
          <Text style={styles.termsText}>* Lorem ipsum dolor sit amet consectetur </Text>
          <Text style={styles.termsText}>* Lorem ipsum dolor sit amet consectetur </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default GiftImage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor:"red",
    backgroundColor:"#e5edffa1",
    width:'100%',
    alignItems: 'center',
    paddingBottom:37,
    paddingTop:10,
  },
  bgImage:{
    width:360,
    height:290,
    justifyContent: 'center',
    paddingLeft:10,

  },
  giftView:{
    marginBottom:'auto',
    marginTop:'auto',
  },
  textBold:{
    fontSize:28,
    fontFamily:"LibreBaskerville-Bold",
  },
  giftText:{
    color:'#f56d75',
    fontFamily:'OpenSans-MediumItalic',
    fontSize: 42,
  },
  termsView:{
    marginBottom:10,
  },
  termsText:{
    fontSize:9.7,
  },
})
