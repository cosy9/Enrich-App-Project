import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions,ImageBackground,TouchableOpacity } from 'react-native'


const FlatListItem = ({item}) => {
    const{text1,title,text2,btnText,bgImage,percent} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
          <ImageBackground imageStyle={{opacity:0.5}} style={styles.bgImage} source={bgImage}>
            <View style={[styles.textContainer,]}>
              <Text style={styles.title}>{title}</Text>
              <View style={{flexDirection: 'row',position: 'relative',alignSelf:'flex-start'}}>
                <Text style={[styles.percent,]}>{percent.substring(0,2)}
                </Text>
                <Text style={styles.percentSymbol}>%</Text>
                <Text style={styles.discount}>{percent.substring(3)}</Text>
              </View>
              <Text style={styles.text1}>{text1}</Text>
              <Text style={styles.text2}>{text2}</Text>
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
    height:225,
  },
  textContainer:{
    height:'100%',
    width:'45%',
    marginLeft: 16,
    justifyContent: 'center',
    // backgroundColor:'red',
  },
  text1:{
    color:'#053356',
    fontSize:17,
    fontFamily:'OpenSans-Bold',
  },
  percent:{
    color:'#d62672',
    fontSize:38,
    fontFamily:'OpenSans-ExtraBold',
  },
  percentSymbol:{
    fontSize:18,
    color:'#d62672',
    fontFamily:'OpenSans-ExtraBold',
  },
  discount:{
    color:'#053356',
    fontSize:18,
    fontFamily:'OpenSans-ExtraBold',
    position: 'absolute',
    bottom:0,
    right:-70
  },
  title:{
    color:'#053356',
    fontSize:18,
    fontFamily:'OpenSans-ExtraBold',
  },
  text2:{
    color:'#053356',
    fontSize:13,
    fontFamily:'OpenSans-Medium',
    marginBottom:8,
    marginTop:3,
  },
  btnContainer:{
    marginTop:12,
    backgroundColor:'#053356',
    paddingVertical:6,
    paddingHorizontal:12,
    alignSelf:'flex-start'
  },
  btnText:{
    color:'#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  
})
