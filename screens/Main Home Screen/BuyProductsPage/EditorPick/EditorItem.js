import React from 'react'
import { Image, StyleSheet, Text,View } from 'react-native'


const EditorItem = ({item}) => {
  const {text1,text2,image} = item;
  return (
          <View style={styles.itemView}>
            <Image imageStyle={{borderRadius:10,}} source={image} style={styles.Image}/>
            <View style={styles.textView}>
              <Text style={styles.text1}>{text1}</Text>
              <Text style={styles.text2}>{text2}</Text>
            </View>
          </View>
  )
}

const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    margin:8,
  },
  text1:{
    fontSize:14,
    fontFamily:'OpenSans-Medium'
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
    fontSize:14,
    marginBottom:3,
    fontFamily:'OpenSans-Medium'
  },
})

export default EditorItem;