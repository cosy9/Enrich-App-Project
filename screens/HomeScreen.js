import { useNavigation } from '@react-navigation/core'
import { StackActions } from '@react-navigation/native';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,TextInput,Image, Linking,KeyboardAvoidingView } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';


const HomeScreen = () => {
    const navigation = useNavigation()
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [referral,setReferral] = useState('')
    const [gender,setGender] = useState({male: false, female: false,other:false})
    const [genderOther,setGenderOther] = useState({male: false, female: false})
    const isGenderNotSelected = Object.keys(gender).every((k) => !gender[k])
    const isOtherGenderNotSelected = Object.keys(genderOther).every((k) => !genderOther[k])

    const handleRegistration =()=>{
      if(!firstName || !lastName){
        alert('Please enter first name and last name')
        return
      }
      if(isGenderNotSelected){
        alert('Please select a gender')
        return
      }
      if(gender.other){
        if(isOtherGenderNotSelected){
          alert('Please select a gender')
          return
        }
      }
      console.log('success');
      navigation.navigate('Drawer');
      navigation.reset({
        index:0,
        routes:[{
          name: 'Drawer',
        }],
      })
    }
    // console.log(gender);
    // console.log(genderOther);
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.container}>
            <Text style={styles.textBold}>Hey Good Looking</Text>
            <Text style={styles.textLight}>Enter Your Details To Get Started</Text>
            <View>
                <TextInput
                style={styles.textInputStyle}
                placeholder="First Name"
                autoFocus
                value={firstName}
                onChangeText={(firstName) => setFirstName(firstName)}
                />
                <TextInput
                style={styles.textInputStyle}
                placeholder="Last Name"
                autoFocus
                value={lastName}
                onChangeText={(lastName) => setLastName(lastName)}
                />
            </View>
            <View style={styles.genderView}>
              <Text style={styles.genderText}>Pick your Gender</Text>
              <View style={styles.genderSelect}>
                <TouchableOpacity 
                  style={[styles.genderDiv,gender.male ? styles.selectedDiv:styles.notselectedDiv]} 
                  onPress={() => setGender({male:true,female:false,other:false})} >
                  <Image style={styles.image} source={require('../assets/Images/male.jpg')} />
                  <Text style={styles.gender}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.genderDiv}
                  style={[styles.genderDiv,gender.female ? styles.selectedDiv:styles.notselectedDiv]}
                  onPress={() => setGender({male:false,female:true,other:false})} >
                  <Image style={styles.image} source={require('../assets/Images/female.jpg')} />
                  <Text style={styles.gender}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.genderDiv} 
                style={[styles.genderDiv,gender.other ? styles.selectedDiv:styles.notselectedDiv]}
                onPress={() => setGender({male:false,female:false,other:true})} >
                  <Image style={styles.image} source={require('../assets/Images/other.jpg')} />
                  <Text style={styles.gender}>Other</Text>
                </TouchableOpacity>
              </View>
            </View>
            {gender.other && (<View style={styles.otherGender}>
              <Text style={styles.otherGenderText}>Which gender do you identify with more ?</Text>
              <TouchableOpacity
                style={[styles.genderDivOther, genderOther.male ? styles.selectedDiv:styles.notselectedDiv]}
                onPress={() => setGenderOther({male:true,female:false,})}
              >
                <Text style={{fontSize:16.7,fontWeight:'bold'}}>Male</Text>
                </TouchableOpacity>
              <TouchableOpacity
                style={[styles.genderDivOther, genderOther.female ? styles.selectedDiv:styles.notselectedDiv]}
                onPress={() => setGenderOther({male:false,female:true,})}
              >
                <Text style={{fontSize:16.7,fontWeight:'bold'}}>Female</Text>
              </TouchableOpacity>
              </View>
              )}
              <View style={styles.referralView}>
                <Text>
                Enter referral code (optional)
                </Text>
                <TextInput
                  style={styles.textInputStyle}
                  placeholder="Enter referral code..."
                  autoFocus
                  value={referral}
                  onChangeText={(referral) => setReferral(referral)}
                />
                <TouchableOpacity style={styles.cancel}>
                  <Text style={styles.canceltext}>Cancel</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity 
                style={styles.Register}
                onPress={handleRegistration}
              >
                <Text style={styles.RegisterText}>
                  Register
                </Text>
                  <AntIcon name="arrowright" style={styles.Righticon} />
              </TouchableOpacity>
              <View style={styles.Terms}>
                <Text style={styles.TermsText}>By creating an account, you agree to our</Text>
                <Text style={styles.TermsLine2}>
                  <Text style={styles.TermsLink} onPress={()=>Linking.openURL('https://google.com')}> Terms & Conditions </Text>
                  and agree to 
                  <Text style={styles.TermsLink} onPress={()=>Linking.openURL('https://google.com')}> Privacy Policy.</Text>
                </Text>
              </View>
        </View>
      </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        padding: 20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:'#fff',
        flex: 1
    },
    textBold:{
      fontSize:19,
      fontWeight:'bold',
      marginBottom:9,
    },
    textLight:{
      fontSize:15.5,
      marginBottom:12,
    },
    text:{
        fontWeight:'700',
        fontSize:22,
        marginBottom:22,
        paddingHorizontal:20,
    },
    textInputStyle:{
      marginVertical: 10,
      width:'96%',
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
      elevation: 10,
  },
    button:{
        backgroundColor:'#0782F9',
        width:'60%',
        padding:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:40,
    },
    buttonText:{
        color:'white',
        fontWeight:'700',
        fontSize:16,
    },
    genderView:{
      flexDirection:'row',
      marginTop:30,
      justifyContent: 'space-between',
      alignItems:'center',
      
    },
    genderText:{
      fontSize:20,
      fontWeight:'700',
      width:'40%',
    },
    genderSelect:{
      flexDirection:'row',
      justifyContent: 'space-evenly',
      alignItems:'center',
    },
    image:{
      height:60,
      width:60,
      resizeMode:'cover',
      alignItems:'center',
      borderRadius:14,
    },
    genderDiv:{
      padding:2,
      backgroundColor:'#f9f9f9',
      shadowColor: '#000',
      borderRadius:14,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 8.84,
      elevation: 10,
      marginRight:9,
    },
    selectedDiv:{
      borderBottomWidth:3,
      borderBottomColor:'red'
    },
    notselectedDiv:{
      borderBottomWidth:0,
      borderBottomColor:'transparent',
    },
    gender:{
      textAlign:'center',
      marginTop:4,
    },
    otherGender:{
      flexDirection:'row',
      marginTop:25,
      justifyContent:'space-between',
      alignItems:'center',
    },
    otherGenderText:{
      fontSize:11.2,
      fontWeight:'bold',
      flex:0.9,
    },
    genderDivOther:{
      padding:2,
      paddingHorizontal:7,
      borderRadius:9,
      backgroundColor:'#f9f9f9',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 8.84,
      elevation: 10,
    },
    referralView:{
      marginTop:22,
      position:'relative',
    },
    cancel:{
      position:'absolute',
      right:17,
      top:38,
      elevation:11,
      zIndex:2,

    },
    canceltext:{
      fontSize:22,
      color:'#eb6165',
      textTransform:'uppercase',
    },
    Register:{
      marginTop:50,
      position:'relative',
      justifyContent: 'center',
      alignItems: 'center',
      width:'96%',
      backgroundColor:'#eb6165',
      borderRadius:10,
      paddingTop:10,
      paddingBottom:10,
    },
    RegisterText:{
    textTransform:'uppercase',
    fontSize:21,
    color:'#fff'
  },
  Righticon:{
    fontSize:32,
    position:'absolute',
    color:'#fff',
    paddingLeft:5,
    paddingTop:5,
    right:10,
    top:2,
  },
  Terms:{
    marginTop:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TermsText:{
    fontSize:12,
    lineHeight:25,
  },
  TermsLine2:{
    fontSize:12,
  },
  TermsLink:{
    borderBottomColor:'#eb6165',
    borderBottomWidth:2,
    color:'#eb6165',
  },
})
