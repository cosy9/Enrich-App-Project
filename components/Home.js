import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';


import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import Otp from '../screens/Otp';

import Draw from '../screens/Main Home Screen/Drawer/Draw';
import Makeup from '../screens/Main Home Screen/Drawer/Makeup';
import Nails from '../screens/Main Home Screen/Drawer/Nails';
import ShoppingBag from '../screens/Main Home Screen/ShoppingBag';
import BookServicesPage from '../screens/Main Home Screen/BookServicesPage/BookServicesPage';
import HairColor from '../screens/Main Home Screen/BookServicesPage/Mood/HairColor/HairColor';
import ManiCure from '../screens/Main Home Screen/BookServicesPage/Mood/HairColor/MainCure/ManiCure';

const Stack = createNativeStackNavigator();


const Home  = ({goBack})=> {

  const bagsHeaderStyle ={
    backgroundColor:'#000',
    color:'#fff',
    shadowColor: 'transparent',
    shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  }

  const headerStyle={
    backgroundColor:'#f5f6f8',
    shadowColor: 'transparent',
    shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  }
  
  const handleBack = ()=>{
    goBack()
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={LoginScreen} 
          options={({navigation}) => ({
            title: "",
            headerStyle:headerStyle,
            headerShadowVisible: false,
            headerLeft: () => (
              <Icon name="arrowleft"
              style={styles.icon}
              size={24} 
              onPress={handleBack} 
              />
            ),
            headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.text} >Skip</Text>
                </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Otp" component={Otp}
          options={() => ({
            title: "",
            headerStyle:headerStyle,
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen name="Home" 
        component={HomeScreen} 
          options={() => ({
            title: "",
            headerStyle:headerStyle,
            headerShadowVisible: false,
            headerLeft:null,
          })}
          
        />
        <Stack.Screen
        name="Bags"
        component={ShoppingBag}
        options={({navigation}) => ({
          title: "",
          headerStyle:bagsHeaderStyle,
          headerShadowVisible: false,
          headerLeft: () => (<>
          <TouchableOpacity
            onPress={()=>navigation.goBack()} 
          >
            <Icon name="arrowleft"
            style={[styles.icon,{color:'#fff'}]}
            size={24} 
            />
            </TouchableOpacity>
            <Text style={{color:'#fff',marginLeft:13,fontSize:18}}>Shopping Bags</Text>
            </>
          )})}
        />
        
        <Stack.Screen
        name="Drawer"
        options={{
          name: "",
          header:()=>null,
        }}
        component={Draw}
        />
      
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Makeup" component={Makeup} 
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Nails" component={Nails} 
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="HairColour" component={HairColor} 
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="ManiCure" component={ManiCure} 
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="BookServicesPage" component={BookServicesPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({ 
    icon:{
    fontSize:26,
    fontWeight:'700',
    paddingVertical:5,
    paddingHorizontal:5,
    color:'#000',
    textAlign:'center',
  },
  text:{
    fontWeight:'700',
  },

})


export default Home
