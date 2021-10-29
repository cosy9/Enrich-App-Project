import * as React from "react";
import { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import Icon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from "expo-firebase-recaptcha";
import { firebase } from "../firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState();
  const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;

  const attemptInvisibleVerification = false;

  const handleOtp = async () => {
      if(phoneNumber.length!== 13){
          alert('Please enter a valid phone number!')
          return;
      }
    try {
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      alert("Otp has been sent");
      navigation.navigate("Otp",{
        verificationId:verificationId,
        phoneNumber:phoneNumber,
      });
    } catch (err) {
      alert(`${err.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={attemptInvisibleVerification}
      />
      <Text style={styles.textStyle}>Continue with phone</Text> 
      <Image style={styles.image} source={require('../assets/Images/smartphone.png')}/>
      <View style={styles.inputContainer}>
        <Icon
          name="phone"
          style={styles.icon} />
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your phone number"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          value={phoneNumber}
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <TouchableOpacity
          disabled={!phoneNumber}
          onPress={handleOtp}
          style={styles.button}
        >
          <AntIcon
          name="arrowright"
          style={styles.Righticon} />
        </TouchableOpacity>
      </View>
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}

    </View>
  );
};

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
        width:'100%',
        fontSize: 17,
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        paddingLeft:60,
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
      color:'#000',
      textAlign:'center',
      position:'absolute',
      left:7,
      top:15,
      zIndex:2,
      elevation: 6
    },
    button:{
      backgroundColor:'#eb6165',
      position:'relative',
      width:48,
      height:48,
      right:50,
      borderRadius:10,
      top:11,
      zIndex:2,
    elevation: 7,
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
})

export default LoginScreen;
