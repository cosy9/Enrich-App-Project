import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AfterCare = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/afterCareBg.jpg')}>
        <View style={styles.textView}>
        <Text style={styles.textBold}>
          After Care Products
        </Text>
        <Text style={styles.textNormal}>
          Everything You Need
        </Text>
        <Text style={styles.textNormal}>
          After Your Salon Treatment
        </Text>
        <Text style={styles.textNormal}>
          For Lasting Results
        </Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>
            Shop Now
          </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default AfterCare

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
    height:290,
    paddingLeft:10,
    paddingTop:10,
  },
  textView:{
    width:'90.1%',
  },
  textBold:{
    fontSize:38,
    fontFamily:'LibreBaskerville-Bold'
  },
  textNormal:{
    fontSize:18,
    fontFamily:'OpenSans-SemiBold',
    marginTop:2,
  },
  btnContainer:{
    marginTop:18,
    backgroundColor: '#2b2a29',
    alignSelf:'flex-start',
    borderRadius:4,
  },
  btnText:{
    color:'#fff',
    fontFamily:'OpenSans-SemiBold',
    fontSize:20,
    padding:6,
    paddingHorizontal:14,
    textTransform: 'uppercase',
  },
})
