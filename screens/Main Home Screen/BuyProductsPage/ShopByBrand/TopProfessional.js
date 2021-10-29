import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TopProfessionalItem from './TopProfessionalItem'
import buyNowPageTopProfessionalData from '../../../../assets/data/buyNowPageTopProfessionalData'
import Icon from 'react-native-vector-icons/AntDesign'

const ShopByBrand = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popularView}>
        <Text style={styles.popularText}>Shop By Brand</Text>
        <TouchableOpacity>
          <Icon style={styles.icon} name='arrowright'/>
        </TouchableOpacity>
      </View>
      <View style={styles.FlexItemWrap}>
      {buyNowPageTopProfessionalData.map((item)=>{
        return <TopProfessionalItem key={item.id} item={item}/>
      })}
      </View>
    </View>
  )
}

export default ShopByBrand

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    flex: 1,
    backgroundColor:"#e5edffa1",
    paddingBottom:20,
  },
  topText:{
    fontSize:19.5,
    fontWeight:"bold",
    paddingLeft:20,
    marginVertical:20,
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  popularView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop:20,
    paddingBottom:26,
    width:'95%',
  },
  popularText:{
    fontWeight:'bold',
    color:'#000',
    fontSize:20,
    marginLeft:16,
  },
  viewText:{
    color:'#ac5137',
    textDecorationLine: 'underline',
    fontSize:15.7,
    fontWeight:'bold',
  },
  icon:{
    fontSize:27,
  }
})
