import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const LuxuryHair = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boldView}>
        <Text style={styles.bold}>{`Luxury 
Hair Care 
Rituals Now
At Great
Prices`}</Text>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.imageBorder}></View>
        <Image style={styles.image} source={require('../../../../../../assets/Images/2.jpg')} />
        <Text style={styles.rightText}>Buy Kerastase Rituals Packages Of Your Choice</Text>
        <View style={styles.priceView}>
          <Text style={styles.triangle}></Text>
          <Text style={styles.price}>Save Upto 2700 *</Text>
        </View>
      <Text style={styles.smallText}>* Saving mentioned is for Kerastase Density Ritual package Pack of 6 for Women</Text>
      </View>
    </View>
  )
}

export default LuxuryHair

const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginTop:14,
    height:240,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  boldView:{
    // backgroundColor:'red',
    flex:0.5,
  },
  bold:{
    fontSize:24,
    width:'86.4%',
    fontFamily:'OpenSans-ExtraBold',
    textTransform:'uppercase',
    textAlign:'center',
    alignSelf:'center',
  },
  rightSection:{
    flex:0.5,
    height:'100%',
    backgroundColor:'#f2d7a5',
    position:'relative'
  },
  imageBorder:{
    position:'absolute',
    right:0,
    bottom:0,
    top:'6%',
    left:'14%',
    width:'72%',
    height:103,
    borderColor:'#ddd',
    borderWidth:0.7,
    zIndex:2,
  },
  image:{
    width:160,
    height:130,
    resizeMode:'contain',
    alignSelf:'center',
  },
  rightText:{
    fontSize:12,
    marginTop:-4,
    marginBottom:3,
    fontFamily:'OpenSans-ExtraBold',
    width:'90%',
    textAlign:'center',
    alignSelf:'center',
  },
  priceView:{
    flexDirection:'row',
    alignItems: 'center',
    width:'100%',
  },
  triangle:{
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 18,
    borderRightWidth: 19,
    borderBottomWidth: 18,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: '#f2d7a5',
    zIndex:2,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    transform:[{rotate:'180deg'}],
  },
  price:{
    backgroundColor:'#b17a2b',
    color:'#fff',
    width:'100%',
    paddingHorizontal:13,
    paddingLeft:24,
    paddingVertical:3,
    fontSize:20,
    marginLeft:-19,
  },
  smallText:{
    marginTop:10,
    fontSize:8,
    textAlign:'center',
    fontWeight:'bold',
  },
})
