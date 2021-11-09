import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import AnIcon from 'react-native-vector-icons/AntDesign';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExtendedComponent = ({item,handleOperation}) => {
  const navigation = useNavigation()
  const {id,title,quantity,ratings,reviews,time,price,priceCross,off,moreDetail,para,isAdded,category} = item

  const handleMoreDetail =(title,category)=>{
    // console.log('inside more details func');
    navigation.navigate('ManiCure',{itemId:1,title:title,category:category})
  } 

  return (<>
    <View  style={styles.extendView}>
      <View style={styles.rowViewTop}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.addView}>
          {isAdded ?
            <View style={styles.addViewOp}>
                <TouchableOpacity onPress={()=>handleOperation('dec',id)} style={[styles.btnContainer,]}>
                  <Text style={[styles.btn]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={()=>handleOperation('inc',id)} style={[styles.btnContainer,]}>
                  <Text style={[styles.btn]}>+</Text>
                </TouchableOpacity>
            </View>
              :
            <TouchableOpacity onPress={()=>handleOperation('add',id)}>
              <Text style={styles.addPlus}>Add+</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      <View style={styles.reviewRowView}>
        <Text style={styles.ratings}>
          {ratings}
        </Text>
        <AnIcon style={[styles.icon,{color:'#ffb917',fontSize:11}]} name='star'/>
        <View style={styles.line}></View>
        <Text style={styles.reviews}>{reviews}</Text>
      </View>
      <View style={styles.rowTimer}>
          <MaIcon style={[styles.icon,{color:'#2b2a29'}]} name='alarm'/>
        <Text style={styles.time}>
          {time}
        </Text>
      </View>
      <View style={styles.priceView}>
        <View style={styles.leftView}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.priceCross}>{priceCross}</Text>
          <Text style={styles.off}>{off}</Text>
        </View>
        <TouchableOpacity onPress={()=>handleMoreDetail(title,category)} style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={styles.moreDetail}>{moreDetail}</Text>
          <AnIcon style={{fontSize:11,color:'#eb6165'}} name="right"/>
        </TouchableOpacity>
      </View>
      <View style={styles.borderBottomStyles}></View>
      <Text style={styles.para}>{para}</Text>
    </View>
      <View style={styles.borderBottomParaStyles}></View> 
    </>
  )
}

export default ExtendedComponent

const styles = StyleSheet.create({
  extendView:{
    flex: 1,
    width:'94%',
    alignSelf:'center',
  },
  rowViewTop:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height:60,
  },
  titleText:{
    color:'#2b2a29',
    fontWeight:'bold',
  },
  addView:{
    borderWidth:1.4,
    borderColor:'#eb6165',
    borderRadius:4,
    width:'17%',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  addViewOp:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%',
    // backgroundColor:'red',
  },
  btnContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#eb6165',
    color:'#fff',
    paddingHorizontal:6,
  },
  btn:{
    fontWeight:'bold',
    color:'#fff',
    padding:2,
  },
  quantity:{
    fontWeight:'bold',
    color:'#eb969c',
    backgroundColor:'#fff',
  },
  addPlus:{
    fontWeight:'bold',
    color:'#eb969c',
    backgroundColor:'#fff',
    padding:2,
    textTransform:'uppercase',
  },
  reviewRowView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ratings:{
    fontSize:14,
    color:'#1e1e1e',
    marginRight:2,
  },
  line:{
    width:0.7,
    height:'60%',
    backgroundColor:'#000',
    marginHorizontal:7,
  },
  reviews:{
    fontSize:13,
    color:'#2b2a29',
    textDecorationLine: 'underline',
    textDecorationStyle:'solid',
    textTransform: 'capitalize',
  },
  rowTimer:{
    marginVertical:5,
    marginBottom:8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  time:{
    fontSize:14,
    color:'#2b2a29',
    marginLeft:2,
  },
  priceView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderStyle: 'dotted',
    // borderBottomWidth:1,
    // borderBottomColor:'#ddd',
    // borderRadius:0.6,
    paddingBottom:4,
  },
  leftView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor:'red',
    width:'44%',
  },
  price:{
    fontSize:15.4,
    color:'#2b2a29',
    fontWeight:'bold',
  },
  priceCross:{
    color:'#b6b6b5',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize:13.2,
  },
  off:{
    color:'#eb6165',
    textTransform:'uppercase',
    fontSize:15.4,
    fontWeight:'bold',
  },
  moreDetail:{
    textTransform:'uppercase',
    fontSize: 11,
    color:'#eb6165',
    marginRight:2,
  },
  borderBottomStyles:{
    width:'100%',
    height:0,
    borderColor:'#ddd',
    borderWidth:0.4,
    borderStyle:'dashed',
    borderRadius:0.6,
    marginTop:3
  },
  para:{
    marginTop:16,
    fontSize:12.5,
    color:'#5a5a59',
    lineHeight:24,
    fontFamily:'OpenSans-Medium',
    borderBottomColor:'#ddd',
    paddingBottom:14,
  },
  icon:{
    fontSize:14,
  },
  borderBottomParaStyles:{
    width:'100%',
    height:0,
    borderColor:'#ddd',
    borderWidth:0.4,
    marginTop:3,
  }
})
