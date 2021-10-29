import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions,ImageBackground,TouchableOpacity } from 'react-native'

const FlatListItem = ({item}) => {
    const{    btnText,logoImage,bgImage} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
          <ImageBackground  style={styles.bgImage} source={bgImage}>
            <View style={styles.textContainer}>
              <Image style={styles.image} source={logoImage}/>
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>{btnText}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  bgImage:{
    width: '100%',
    height:240,
  },
  textContainer:{
    height:'100%',
    width:'45%',
    backgroundColor:'#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:130,
    height:70,
    resizeMode: 'contain',
  },
  btnContainer:{
    marginTop:18,
    backgroundColor:'#272727',
    paddingVertical:6,
    paddingHorizontal:12,
  },
  btnText:{
    color:'#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
