import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const BookServices = () => {
  const navigation = useNavigation()
  const goToServicesPage = ()=>{
    navigation.navigate('BookServicesPage')
  }

  const goToBuyProducts = ()=>{
    navigation.navigate('BuyProductsPage')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToServicesPage} style={styles.item}>
        <ImageBackground 
          imageStyle={{ borderRadius: 10,}}
          source={require('../../assets/Images/book-product.jpg')} style={styles.bgImage}>
          <Text style={styles.text}>
            Book a Service
          </Text>
          <TouchableOpacity>
            <Icon name="right" style={styles.icon} />
        </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToBuyProducts} style={styles.item}>
        <ImageBackground
        imageStyle={{ borderRadius: 10,}}
          source={require('../../assets/Images/buy-product.jpg')}
          style={styles.bgImage}>
          <Text style={styles.text}>
            Buy Products
          </Text>
          <TouchableOpacity>
            <Icon name="right" style={styles.icon} />
        </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}

export default BookServices

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    paddingBottom:30,
  },
  item:{
    marginVertical:18,
    borderRadius:10,
    width:175,
  },
  bgImage:{
    width:'100%',
    height:210,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  text:{
    fontSize:14,
    color:'#fff',
    marginBottom:5,
    marginLeft:10,
    textTransform:'uppercase',
  },
  icon:{
    fontSize: 17,
    color:'#000',
    right:7,
    bottom:6,
    backgroundColor:'#fff',
    borderRadius: 50,
    padding:2,
  },
})
