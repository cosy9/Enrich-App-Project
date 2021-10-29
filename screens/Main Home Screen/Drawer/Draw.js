import React from 'react'
import { StyleSheet, Text, View,Dimensions,useWindowDimensions} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from '../Tabs/Tabs';
import BookServicesPage from '../BookServicesPage/BookServicesPage';
import DrawerContents from './DrawerContents'

const Drawer = createDrawerNavigator();


const Draw = () => {
  const width = Dimensions.get("screen").width;

  return (
      <Drawer.Navigator
      screenOptions={{ 
        drawerStyle:{ 
          backgroundColor:'#f5f6f8',
          width:width,
        },
        swipeEnabled:false, 
        gestureEnabled:false,
      }}
      drawerContent={props => <DrawerContents {...props} />}
      >
        <Drawer.Screen
          options={{
            header: () => null,
          }}
          name="Home Page" component={Tabs} 
        />
        {/* <Drawer.Screen
          options={{
            // header: () => null,
          }}
          name="Book Services Page" component={BookServicesPage} 
        /> */}
      </Drawer.Navigator>
  )
}

export default Draw

const styles = StyleSheet.create({})
