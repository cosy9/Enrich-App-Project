import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/core'

import AnIcon from 'react-native-vector-icons/AntDesign';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ExtendedComponent = ({item,handleOperation}) => {
  const navigation = useNavigation()
  const {id,title,quantity,ratings,reviews,time,price,priceCross,off,moreDetail,para,isAdded,category,options,isTrending,isNew} = item

  const handleMoreDetail =(title,category)=>{
    // console.log('inside more details func');
    console.log(category);
    if(category=== 'Manicure-Classic') navigation.navigate('ManiCure',{itemId:1,title:title,category:category})
    if(category=== 'Hair Colour') navigation.navigate('NestedHairColor',{itemId:2,title:title,category:category})
  } 

  return (<View style={{height:'auto'}}>
    <View  style={styles.extendView}>
      <View style={{flexDirection: 'row',marginTop:20,}}>
        {isTrending && <Text style={{backgroundColor:'#ffecf2',color:'#ff0753',borderRadius:7,fontSize:12,fontWeight:'bold',paddingHorizontal:10,paddingVertical:1.3}}>TRENDING</Text>}
        {isNew && <Text style={{backgroundColor:'#dddbff',color:'#8179ff',borderRadius:7,marginLeft:5,paddingHorizontal:10,paddingVertical:1.3, fontSize:12,fontWeight:'bold'}}>NEW</Text>}
      </View>
      <View style={styles.rowViewTop}>
        <Text style={styles.titleText}>{title}</Text>
        <View style={styles.addView}>
          {isAdded ?
            <View style={styles.addViewOp}>
                <TouchableOpacity onPress={()=>handleOperation('dec',{id,title,ratings,reviews,options})} style={[styles.btnContainer,]}>
                  <Text style={[styles.btn]}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={()=>handleOperation('inc',{id,title,ratings,reviews,options})} style={[styles.btnContainer,]}>
                  <Text style={[styles.btn]}>+</Text>
                </TouchableOpacity>
            </View>
              :
            <TouchableOpacity onPress={()=>handleOperation('add',{id,title,ratings,reviews,options})}>
              <Text style={styles.addPlus}>Add+</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
      <View style={[styles.reviewRowView,]}>
        <View style={styles.leftRowReview}>
          <Text style={styles.ratings}>
            {ratings}
          </Text> 
          <AnIcon style={[styles.icon,{color:'#ffb917',fontSize:11}]} name='star'/>
          <View style={styles.line}></View>
          <Text style={styles.reviews}>{reviews}</Text>
        </View>
        {options && <Text style={{color:'#aaa',fontSize:12,marginRight:5,}}>{options}</Text>}
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
    </View>
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
    marginTop: 8,
    marginBottom:3,
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
    justifyContent: 'space-between',
  },
  leftRowReview:{
    flexDirection:'row',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  ratings:{
    fontSize:14,
    color:'#1e1e1e',
    marginRight:2,
  },
  line:{
    width:0.7,
    height:8,
    backgroundColor:'#aaa',
    color:'red',
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
    marginHorizontal:5,
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
