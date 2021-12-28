import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import AnIcon from 'react-native-vector-icons/AntDesign';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';


const HairColorHeader = ({isTrue}) => {
  const navigation = useNavigation()
  const closeDrawer = ()=>{
    navigation.goBack()
  }
  return (
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={closeDrawer}>
            <AnIcon style={[styles.icon]} name='arrowleft' />
          </TouchableOpacity>
          {isTrue &&<Text style={[styles.headerText,{marginRight:'auto'}]}>Grooming services Men</Text>}
          {!isTrue &&<Text style={[styles.headerText,{marginRight:'auto'}]}>Beauty Services Women</Text>}
          <TouchableOpacity>
            <AnIcon style={styles.icon} name='search1' />
          </TouchableOpacity>
          <TouchableOpacity>
            <AnIcon style={styles.icon} name='hearto' />
          </TouchableOpacity>
          <TouchableOpacity>
            <SIcon style={styles.icon} name='bag' />
          </TouchableOpacity>
        </View>
  )
}

export default HairColorHeader

const styles = StyleSheet.create({
  iconContent:{
    flexDirection:'row',
    height:64,
    marginTop:-4,
    alignItems: 'center',
    paddingHorizontal:14,
    backgroundColor:'#2b2a29',
  },
  headerText:{
    color:'#fff',
    fontSize:16.6,
  },
  icon:{
    fontSize:24,
    color:'#fff',
    marginRight:20,
  },
})
