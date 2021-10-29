import React from 'react'
import { ImageBackground,StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const BgImageContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/p1.jpg')}>
          <Text style={styles.text1}>
            Shop Your Favorite
          </Text>
          <Text style={styles.title}>
            Beauty Essentials
          </Text>
          <TouchableOpacity style={styles.btnContainer} >
            <Text style={styles.btnText}>visit the products store</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground style={styles.bgImage} source={require('../../../../assets/Images/Book_Now_Images/p2.jpg')}>
          <Text style={styles.title}>
            Earn 25%
          </Text>
          <Text style={styles.mdText}>
            Reward Points
          </Text>
          <Text style={styles.text1}>
            When You Buy Products*
          </Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Shop Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

export default BgImageContent

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor:'#f5f6f8',
    paddingBottom:20,
  },
  imageContainer:{
    flex: 1,
    width: '94%',
  },
  bgImage:{
    width: '100%',
    height:260,
    marginTop:24,
    justifyContent: 'center',
  },
  text1:{
    fontSize:17,
    paddingLeft:14,
    fontFamily:'OpenSans-SemiBold',
    fontWeight:'bold',
  },
  title:{
    fontFamily:'LibreBaskerville-Bold',
    paddingLeft:12,
    fontSize:32,
    lineHeight:39,
    width:'66%',
  },
  btnContainer:{
    paddingLeft:12,
    alignSelf:'flex-start',
  },
  btnText:{
    color:'#fff',
    fontFamily:'OpenSans-Medium',
    backgroundColor:'#000',
    paddingHorizontal:10,
    paddingVertical:8,
    marginTop:17,
    textTransform:'uppercase',
  },
  mdText:{
    fontSize:25.4,
    fontWeight:'bold',
    paddingLeft:14,
    marginBottom:12,
  },
})
