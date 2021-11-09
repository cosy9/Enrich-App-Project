import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider } from 'react-native-elements';
import AnIcon from 'react-native-vector-icons/AntDesign';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import extendedLogo from '../../../../../../../assets/data/extendedLogo';
import LogoListItem from './LogoListItem';

const Description = () => {
  const data = [
    {oneStar: 2 },
    {twoStar: 25 },
    {threeStar: 475 },
    {fourStar: 755 },
    {fiveStar: 5075 },
  ];
  return (<View style={{backgroundColor: '#fff'}}>
    <View style={styles.descriptionContainer}>
      <Image style={styles.image} source={require('../../../../../../../assets/Images/Book_Now_Images/logo/bornE.png')}/>
      <View style={styles.descriptionTextContainer}>
        <Text style={styles.descriptionTitle}>
          Be's Brand Promise
        </Text>
        <Text style={styles.descriptionText}>
          All Be - BORN ETHICAL Hand Care Products Are 100% Vegan And Cruelty-Free.
          They Are Also Free From Toxins Such As Sulphates,Parabens,Petralatum,Formaldehyde And Artificial Colour.
        </Text>
      </View>
    </View>
      <View style={styles.dottedBorder}></View>
    <ScrollView
        horizontal
        style={styles.ScrollView}
      >
        {extendedLogo.map((item)=>{
            return <LogoListItem key={item.id} item={item} />
        })}
      </ScrollView>
      <Divider width={15} color="#f5f6f8"/>
      <View style={styles.btnView}>
        <TouchableOpacity>
          <AnIcon style={[styles.icon]} name='sharealt' />
        </TouchableOpacity>
        <TouchableOpacity>
          <AnIcon style={[styles.icon]} name='hearto' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <SIcon style={[styles.icon,{color:'#fff'}]} name='bag' />
          <Text style={styles.btnText}>ADD TO BAG</Text>
        </TouchableOpacity>
      </View>
      <Divider width={15} color="#f5f6f8"/>

      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.textBold}>Ratings & Reviews</Text>
          <View style={styles.rowView}>
          <View style={styles.ratingsContainer}>
            <View style={styles.ratingsText}>
              <Text style={[styles.textBold,{fontSize:24,}]}>4.3</Text>
              <AnIcon style={[styles.icon,{color:'#ffb917',marginLeft:8,}]} name="star"/>
            </View>
            <Text style={styles.textGrey}>6.5k Verified buyers</Text>
          </View>
          <View style={styles.line}></View>
          <Image style={[styles.imageRating]} source={require('../../../../../../../assets/Images/Book_Now_Images/barGraph.png')} />
          </View>
        </View>
      </View>

  </View>)
}

export default Description

const styles = StyleSheet.create({
  descriptionContainer:{
    backgroundColor:'#fff',
    // backgroundColor:'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:200,
    paddingTop:20,
  },
  image:{
    width:100,
    height:100,
  },
  descriptionTextContainer:{
    width:'70%',
  },
  descriptionTitle:{
    fontSize:14.4,
    fontFamily:'OpenSans-Bold',
    marginBottom:6,
  },
  descriptionText:{
    fontSize:14.4,
    lineHeight:23,
  },
  dottedBorder:{
    width:'90%',
    height:0,
    alignSelf:'center',
    borderColor:'#ddd',
    borderWidth:0.9,
    borderStyle:'dashed',
    borderRadius:0.6,
    marginBottom:6,
  },
  ScrollView:{
    backgroundColor:'#fff',
    paddingTop:6,
    height:118,
    // backgroundColor:'red'
  },
  btnView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height:70,
  },
  icon:{
    fontSize:22,
    color:'#555554',
  },
  btnContainer:{
    backgroundColor:'#eb6165',
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal:50,
    paddingVertical:6,
  },
  btnText:{
    color:'#fff',
    fontFamily:'OpenSans-Bold',
    fontSize:20,
    paddingHorizontal:10,
    paddingVertical:6,
    textAlign:'center',
  },
  container:{
    width: '100%',
    height: 180,
    backgroundColor:'#fff',
    justifyContent: 'center',
  },
  wrapper:{
    width:'90%',
    alignSelf:'center',
  },
  textBold:{
    fontFamily:'OpenSans-Bold',
    fontSize:18,
  },
  rowView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  ratingsContainer:{
    justifyContent: 'center'
  },
  ratingsText:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  textGrey:{
    color:'#555554',
    fontFamily:'OpenSans-Medium',
    marginRight:4,
  },
  line:{
    width:1.5,
    height:'90%',
    backgroundColor:'#ddd',
  },
  imageRating:{
    width:200,
    height:120,
    resizeMode:'contain',
  },
})
