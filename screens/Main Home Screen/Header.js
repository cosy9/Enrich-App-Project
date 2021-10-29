import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { Image, StyleSheet,TextInput, TouchableOpacity, View } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

const Header = () => {
  const navigation = useNavigation()
    const handleMenu = ()=>{
      console.log('open drawer');
      navigation.openDrawer()
    }
    return (
        <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleMenu}>
                <Icon style={styles.icon} name="menu"/>
              </TouchableOpacity>
                <View style={styles.Imgcontainer}>
                    <Image style={styles.image} source={require('../../assets/enrich-white.png')}/>
                </View>
                <View style={styles.rightIcons}>
                  <TouchableOpacity>
                    <AntIcon style={[styles.icon,{marginRight:40,}]} name="hearto"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate('Bags')}>
                    <SIcon style={styles.icon} name="bag"/>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.InputContainer}>
              <AntIcon onPress={()=>console.log('search')}
                style={[styles.inputIcon,styles.searchIcon]}
                name="search1"
              />
              <TextInput 
                style={styles.textInput} 
                placeholder='Search Products, Services & more...' 
              />
              <AntIcon 
                style={[styles.inputIcon,styles.cameraIcon]}
                name="camerao"
              />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerWrapper:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'#2f2f2f',
        width:'100%',
    },
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '90%',
        height: 80,
    },
    icon:{
        fontSize:26,
        color:'#fff',
    },
    Imgcontainer:{
        width:220,
        height:100,
        marginBottom:10,
        marginLeft:6,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    rightIcons:{
        flexDirection:'row',
    },
    InputContainer:{
      flexDirection:'row',
      position: 'relative',
      paddingBottom:20,
    },
    inputIcon:{
      fontSize:22,
      position: 'absolute',
    },
    searchIcon:{
      left:6,
      top:4,
      zIndex:2,
      // backgroundColor:'red',
      padding:8,
    },
    textInput:{
      backgroundColor:'#fff',
      fontSize:13,
      borderRadius:6,
      width:'95%',
      height:46,
      paddingLeft:50,
    },
    cameraIcon:{
      right:6,
      top:2,
      padding:8,
    },
})
