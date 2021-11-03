import React from 'react'
import { useNavigation } from '@react-navigation/core'

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const MoodItem = ({item}) => {
  const navigation = useNavigation()
  const {title,iconLeft,iconRight} = item
  const handleClick = (title)=>{
    if(title ==='Hair Colour'){
      navigation.navigate('HairColour')
      return
    }
  }
  return (
    <TouchableOpacity onPress={()=>handleClick(title)} style={styles.item}>
      <Image style={styles.image} source={iconLeft}/>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Icon style={styles.icon} name={iconRight}/>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default MoodItem

const styles = StyleSheet.create({
  item:{
    flexDirection:'row',
    height:66,
    width:'90%',
    alignItems: 'center',
    marginTop:8,
    borderRadius:8,
    backgroundColor:'#ddd',
  },
  image:{
    width:40,
    height:40,
    marginLeft:10,
  },
  title:{
    fontSize:17,
    marginLeft:16,
    flexGrow:1,
    fontWeight:'bold',
  },
  icon:{
    fontSize:23,
    marginRight:16,
  },
})
