import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FaIcon from 'react-native-vector-icons/Feather'
import SiIcon from 'react-native-vector-icons/SimpleLineIcons'

const IconItem = ({item}) => {
  const {title,text,icon} = item
  return (
    <View style={styles.flexChild}>
      {icon ==='truck' ? <FaIcon style={styles.icon} name={icon} /> :<SiIcon name={icon} style={styles.icon}/>}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default IconItem

const styles = StyleSheet.create({
  flexChild:{
    flex:1,
    paddingVertical:8,
  },
  icon:{
    fontSize:32,
    color:'#fff',
    textAlign: 'center',

  },
  title:{
    fontWeight:'bold',
    fontSize:11.8,
    color:'#fff',
    textAlign: 'center',
    marginVertical:3,
    textTransform: 'uppercase',
  },
  text:{
    fontSize:9.4,
    color:'#fff',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})
