import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import drawerNailsData from '../../../assets/data/drawerNailsData'
import AnIcon from 'react-native-vector-icons/AntDesign';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import CategoryList from './CategoryList'


const Nails = () => {
  let length = drawerNailsData.length
  const navigation = useNavigation()
  const handleCategory = (title)=>{
    console.log(title);
  }
  
  const closeDrawer = ()=>{
    navigation.goBack()
  }
  return (
    <View style={{flex: 1,}}>
      <DrawerContentScrollView>
        <View style={styles.iconContent}>
          <TouchableOpacity onPress={closeDrawer} style={{marginRight:'auto'}} >
            <AnIcon style={[styles.icon]} name='arrowleft' />
          </TouchableOpacity>
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
          <Text style={styles.categoryTitle}>Nails</Text>
          <View style={styles.categoryView}>
        {drawerNailsData.map((item)=>{
              return <CategoryList key={item.id} item={item} length={length} handleCategory={handleCategory} />
            })
          }
          </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default Nails

const styles = StyleSheet.create({
  iconContent:{
    flex:1,
    flexDirection:'row',
    height:70,
    alignItems: 'center',
    paddingHorizontal:14,
  },
  icon:{
    fontSize:24,
    color:'#000',
    marginRight:20,
  },
  topText:{
    fontSize:22,
    fontWeight:'bold',
    padding:18,
  },
  largeIcons:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:200,
    borderRadius:16,
    backgroundColor:'#fff',
  },
  categoryTitle:{
    fontSize:22,
    fontWeight:'bold',
    padding:18,
  },
  categoryView:{
    backgroundColor:'#fff',
    borderRadius:15,
    marginBottom:40,
  }

})
