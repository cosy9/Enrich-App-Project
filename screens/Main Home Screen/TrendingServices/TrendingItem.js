import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const TrendingItem = ({item}) => {
  const {title,image} = item
  return (
    <View style={styles.itemView}>
            <ImageBackground 
            imageStyle={{borderRadius: 10,opacity: 0.44}} 
            source={image} style={styles.bgImage}>
              <Text style={styles.innerText}>{title}</Text>
              <TouchableOpacity>
                <Icon style={styles.icon} name="right"/>
              </TouchableOpacity>
            </ImageBackground>
    </View>
  )
}

export default TrendingItem

const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    height:60,
    margin:8,
  },
  bgImage:{
    width: '100%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  innerText:{
    width:'60%',
    marginLeft:6,
    fontSize:14,
    color:'#2f2f2f'
  },
  icon:{
    marginRight:20,
    fontSize:18,
    color:'#000',
    backgroundColor:'#fff',
    padding:2,
    borderRadius:50,
  },
})
