import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'

const FlatListItem = ({item}) => {
  const {title,text2,text3,image} = item;
  return (
          <View style={styles.itemView}>
            <Image ImageStyle={{borderRadius:10,}} source={image} style={styles.Image}/>
            <View style={styles.textView}>
              <Text style={styles.textBold}>{title}</Text>
              <Text style={styles.text2}>{text2}</Text>
              <Text style={styles.text3}>{text3}</Text>
            </View>
          </View>
  )
}


const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    height:280,
    margin:8,
  },
  textBold:{
    fontSize:15,
    fontWeight:'bold',
  },
  Image:{
    width: '100%',
    height: 200,
    borderRadius:5,
  },
  textView:{
    marginTop:7,
    marginBottom:10,
  },
  text2:{
    fontSize:16,
    marginBottom:3,
  },
  text3:{
    fontSize:16,
  },
})

export default FlatListItem;