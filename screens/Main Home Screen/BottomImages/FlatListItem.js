import React from 'react'
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View,Image,useWindowDimensions } from 'react-native'



const FlatListItem = ({item}) => {
    const{image1,image2,image3} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            <ImageBackground imageStyle={{opacity:0.7}}  source={image1.image} style={styles.image} >
              <Text style={styles.title}>{image1.title?? ''}</Text>
              <Text style={[styles.text1,{color:'#604e3c', fontWeight:'bold',fontSize:22}]}>{image1.text1?? ''}</Text>
              <Text style={[styles.text2,{color:'#604e3c', fontWeight:'bold',fontSize:17}]}>{image1.text2?? ''}</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{opacity:0.7}} source={image2.image} style={styles.image} >
              <Text style={styles.title}>{image2.title?? ''}</Text>
              <Text style={styles.text1}>{image2.text1?? ''}</Text>
              <Text style={[styles.text2,{color:'#604e3c', fontWeight:'bold',fontSize:17}]}>{image2.text2?? ''}</Text>
            </ImageBackground>
            <ImageBackground imageStyle={{opacity:0.7}} source={image3.image} style={styles.image} >
              <Text style={styles.title}>{image3.title?? ''}</Text>
              <Text style={[styles.text1,{fontWeight:'bold',fontSize:17}]}>{image3.text1?? ''}</Text>
              <Text style={[styles.text2,{fontWeight:'bold',fontSize:17}]}>{image3.text2?? ''}</Text>
            </ImageBackground>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:'96%',
        marginLeft:9,
        height:350,
        marginBottom:20,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    title:{
      fontWeight:'bold',
      fontSize:29,
      color:'#000',
    },
  text1:{
    color:'#000',
  },
  text2:{
    color:'#000',
    marginBottom:37,
  },
    })
