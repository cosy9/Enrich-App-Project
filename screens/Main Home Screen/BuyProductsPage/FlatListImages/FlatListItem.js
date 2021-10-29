import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions,ImageBackground,TouchableOpacity } from 'react-native'



const FlatListItem = ({item}) => {
    const{title1,bgImage,text1,productImage,title2,text2,btnText} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={bgImage} />
                <View style={styles.imageData}>
                  <Text style={styles.imageTitle}>{title1}</Text>
                  <Text style={styles.imageText1}>{text1}</Text>
                  <Image style={styles.imageCircle} source={productImage}/>
                  <Text style={styles.imageTitle}>{title2}</Text>
                  <Text style={styles.imageText1}>{text2}</Text>
                  <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>{btnText}</Text>
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
  container:{
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 5,
    paddingBottom:3,
  },
  imageContainer: {
      flexDirection:'row',
      height:240,
      alignItems: 'center',
      backgroundColor:'#fff',
  },
  image:{
      flex:0.5,
      width:'100%',
      height:'100%',
  },
  imageData:{
    flex:0.5,
    textAlign:'center',
    alignItems: 'center',
  },
  imageTitle:{
      fontSize:13.9,
      fontFamily:'OpenSans-ExtraBold',
      color:'#272727',
  },
  imageText1:{
    fontSize:10.6,
    fontFamily:'OpenSans-Bold',
    marginVertical:2,
  },
  imageCircle:{
    width:75,
    height:75,
    borderRadius:50,
  },
  btnContainer:{
    marginTop:12,
    backgroundColor:'#272727',
    paddingVertical:6,
    paddingHorizontal:12,
  },
  btnText:{
    color:'#fff',
  },
  
})
