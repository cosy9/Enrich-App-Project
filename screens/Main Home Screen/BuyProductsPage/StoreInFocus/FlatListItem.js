import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions,ImageBackground,TouchableOpacity } from 'react-native'

const FlatListItem = ({item}) => {
    const{text1,title,text2,discount,btnText,bgImage,backgroundColor} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
          <ImageBackground imageStyle={{borderRadius:7,}} style={styles.bgImage} source={bgImage}>
            <View style={[styles.textContainer,{backgroundColor:backgroundColor}]}>
              <Text style={styles.text1}>{text1}</Text>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.text2}>{text2}</Text>
              <Text style={styles.discount}>{discount}</Text>
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
    alignItems: 'center',
    marginLeft:5,
  },
  bgImage:{
    width: '96%',
    height:185,
    
  },
  textContainer:{
    height:'100%',
    width:'45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius:7,
    borderBottomLeftRadius:7,
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
    paddingHorizontal:12,
  },
  btnText:{
    color:'#272727',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
