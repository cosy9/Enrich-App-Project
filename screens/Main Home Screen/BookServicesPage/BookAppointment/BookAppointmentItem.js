import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import  Icon  from 'react-native-vector-icons/AntDesign'

const BookAppointmentItem = ({item}) => {
  const navigation = useNavigation()
  const handleClick = (title)=>{
    if(title ==='Salon Service'){
      navigation.navigate('HairColour')
      return
    }
  }
  const {title,iconLeft,iconRight} = item
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

export default BookAppointmentItem

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
