import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import drawerIconsData from '../../../assets/data/drawerIconsData'
import drawerCategoryData from '../../../assets/data/drawerCategoryData'
import AnIcon from 'react-native-vector-icons/AntDesign';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import IconsItem from './IconsItem';
import CategoryList from './CategoryList'


const DrawerContents = (props) => {
  let length = drawerCategoryData.length
  // console.log(length);
  const handleCategory = (title)=>{
    if(title === 'Makeup'){
      console.log('navigate to Makeup menu');
      props.navigation.navigate('Makeup')
    }
  }

  const closeDrawer = ()=>{
    props.navigation.closeDrawer()
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
          <Text style={styles.topText}>Shop Enrich</Text>
          <View style={styles.largeIcons}>
          {
            drawerIconsData.map((item)=>{
              return <IconsItem key={item.id} item={item} />
            })
          }
          </View>
          <Text style={styles.categoryTitle}>Shop By Category</Text>
          <View style={styles.categoryView}>
          {
            drawerCategoryData.map((item)=>{
              return <CategoryList key={item.id} length={length} item={item} handleCategory={handleCategory} />
            })
          }
          </View>
      </DrawerContentScrollView>
    </View>
  )
}

export default DrawerContents

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
