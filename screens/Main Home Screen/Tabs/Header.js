import React from 'react'
import { Image, Text,StyleSheet,TextInput, TouchableOpacity, View } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';

const Header = ({navigation}) => {

  const handleBack = ()=>{
    navigation.goBack();
  }
    return (
        <View style={styles.containerWrapper}>
            <View style={styles.container}>
              <View style={styles.leftItem}>
              <TouchableOpacity onPress={handleBack}>
                <AntIcon style={styles.icon} name="arrowleft"/>
              </TouchableOpacity>
                <Text style={styles.offers}>Offers</Text>
              </View>
                <View style={styles.rightIcons}>
                  <TouchableOpacity>
                  <AntIcon style={styles.icon} name="search1"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntIcon style={styles.icon} name="hearto"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> navigation.navigate('Bags')}>
                    <SIcon style={styles.icon} name="bag"/>
                  </TouchableOpacity>
                </View>
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
        width: '93%',
        height: 80,
    },
    icon:{
        fontSize:26,
        color:'#fff',
    },
    offers:{
      color:'#fff',
      fontSize:19,
      marginLeft:30,
    },
    leftItem:{
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rightIcons:{
        flexDirection:'row',
        width:140,
        justifyContent: 'space-between',
    },
    InputContainer:{
      flexDirection:'row',
      position: 'relative',
      paddingBottom:20,
    },
    inputIcon:{
      fontSize:22,
      color:'#fff',
    },
    textInput:{
      backgroundColor:'#fff',
      fontSize:13,
      borderRadius:6,
      width:'95%',
      height:46,
      paddingLeft:50,
    },
})
