import React from 'react'
import { Image, StyleSheet, Text,TouchableOpacity,View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


const SummerOfBeautyItem = ({item}) => {
  const {title,icon,image} = item;
  return (
          <View style={styles.itemView}>
            <Image imageStyle={{borderRadius:10,}} source={image} style={styles.Image}/>
            <TouchableOpacity style={styles.textView}>
              <Text style={styles.textBold}>{title}</Text>
              <Icon style={styles.icon} name={icon} />
            </TouchableOpacity>
          </View>
  )
}

const styles = StyleSheet.create({
  itemView:{
    width: '42.5%',
    margin:8,
  },
  Image:{
    width: '100%',
    height: 200,
    borderRadius:5,
  },
  textView:{
    marginTop:6,
    marginBottom:9,
    marginHorizontal:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBold:{
    fontSize:12.2,
    fontWeight:'bold',
  },
  icon:{
    fontSize:13,
  }
})

export default SummerOfBeautyItem;