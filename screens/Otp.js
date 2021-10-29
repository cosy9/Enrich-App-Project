import React from 'react'
import { useState} from "react";
import { firebase } from "../firebase";
import Icon from 'react-native-vector-icons/AntDesign';


import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

+91
const Otp = ({route,navigation}) => {
  const { verificationId,phoneNumber} = route.params;  
  const [verificationCode, setVerificationCode] = useState(null);
  const confirmOpt = async () => {
    if(verificationCode.length!== 6){
        alert("Please enter a valid verification code")
        return;
    }
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId,verificationCode);
    await firebase.auth().signInWithCredential(credential);
    alert("Otp has been confirmed");
    navigation.replace("Home");
  } catch (err) {
    alert(`${err.message}`);
  }
};

    return (
        <View style={styles.container}>
          <View style={styles.info}>
            <Text style={styles.textBold}>Verify With OTP</Text>
            <Text style={styles.textLight}>6 digit OTP has been sent to your number</Text>
            <Text style={styles.phone}>{phoneNumber}</Text>
            <Image style={styles.image} source={require('../assets/Images/password.png')}/>
          </View>
          <View style={styles.textView}>
              <TextInput
              style={styles.textInputStyle}
              editable={!!verificationId}
              placeholder="123456"
              onChangeText={setVerificationCode}
              />
            </View>
            <View style={styles.submit}>
              <TouchableOpacity
              disabled={!verificationId}
              onPress={confirmOpt}
              style={styles.button}
              >
              <Text style={styles.buttonText}>Verify</Text>
              <Icon
                name="arrowright"
                style={styles.icon}
                size={24}
              />
              </TouchableOpacity>
            </View>  
    </View>
    )
}


const styles = StyleSheet.create({
  container:{ 
    padding: 20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'#fff',
    flex: 1
  },
  textStyle:{
    fontSize:17.5,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textInputStyle:{
    marginVertical: 10,
    width:'90%',
    fontSize: 17,
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 5
  },
  image:{
    marginVertical:20,
    height:180,
    width:'100%',
    resizeMode:'contain',
    alignItems:'center',
  },
  inputContainer:{
    flexDirection:'row',
  },
  icon:{
    fontSize:26,
    fontWeight:'700',
    paddingVertical:5,
    paddingHorizontal:5,
    color:'#fff',
    textAlign:'center',
    position:'absolute',
    right:0,
    top:5,
    zIndex:2,
  },
  submit:{
    position:'relative',
  },
  button:{
    position:'absolute',
    borderRadius:10,
    marginTop:10,
    marginRight:50,
    backgroundColor:'#eb6165',
    padding:14,
    paddingHorizontal:30,
    paddingRight:35,
    right:0,
  },
  buttonText:{
    color:'#fff',
    textTransform:'uppercase',
    letterSpacing:2,
    fontWeight:'bold',
  },
  Righticon:{
    fontSize:36,
    width:'100%',
    height:'100%',
    color:'#fff',
    alignItems:'center',
    justifyContent: 'center',
    paddingLeft:5,
    paddingTop:5,
  },
  info:{
    marginTop:40,
  },
  textBold:{
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:17,
    marginBottom:10,
  },
textLight:{
  fontWeight:'300',
  textAlign: 'center',
  marginBottom:10,
},
phone:{
  fontWeight:'bold',
  fontSize:17,
  textAlign: 'center',
},
textView:{
  flexDirection:'row',
  justifyContent: 'center',
  alignItems:'center',
},
})

export default Otp