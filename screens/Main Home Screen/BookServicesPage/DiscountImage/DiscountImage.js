import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const DiscountImage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/womenBg.jpg')}>
        <View style={styles.viewContainer}>
        <Image style={styles.image} source={require('../../../../assets/Images/Book_Now_Images/badgeImg.png')}/>
        <View style={styles.insideView}>
          <Text style={styles.getText}>Get</Text>
          <Text style={styles.percent}>20% - 67%</Text>
          <Text style={styles.extra}>EXTRA BENEFITS</Text>
          <Text style={styles.onBeauty}>On Beauty Package Worth</Text>
          <Text style={styles.rupeeDiscount}>Rs.5000 to Rs.1 Lakh</Text>
          <Text style={styles.gst}>GST Applicable</Text>
        </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default DiscountImage

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
    height:250,
    paddingLeft:10,
    paddingTop:10,
    justifyContent: 'center',
  },
  viewContainer:{
    backgroundColor:'#fff',
    width:180,
    height:200,
    marginTop:8,
    borderRadius:8,
    padding:4,
    position:'relative',
  },
  image:{
    width:70,
    height:70,
    resizeMode:'contain',
    position:'absolute',
    top:-30,
    left:58,
    zIndex:2,
  },
  insideView:{
    borderWidth:2,
    borderColor:'#ece1be',
    borderRadius:8,
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getText:{
    fontSize:16.5,
    marginTop:36,
    fontFamily:'OpenSans-Medium',
  },
  percent:{
    color:'#9a7638',
    fontFamily:'OpenSans-Bold',
    fontSize:28,
  },
  extra:{
    backgroundColor:'#dbc18e',
    fontWeight:'bold',
    fontSize:14,
    paddingHorizontal:14,
  },
  onBeauty:{
    marginTop:8,
    fontSize:12,
    fontWeight:'bold',
  },
  rupeeDiscount:{
    fontWeight:'bold',
    fontSize:16,
    marginTop:4,
    marginBottom:'auto',
  },
  gst:{
    fontSize:9,
  },
})
