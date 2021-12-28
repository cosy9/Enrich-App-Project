import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { RadioButton } from 'react-native-paper';
import flatIconImageHairColor from '../../../../../../../assets/data/flatIconImageHairColor';
import nestedHairColorRadioData from '../../../../../../../assets/data/nestedHairColorRadioData'

import AnIcon from 'react-native-vector-icons/AntDesign';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const TrendingSection = ({title}) => {
  const [checked, setChecked] = React.useState('2');
  let length = nestedHairColorRadioData.length.toString()
  return (<>
  <View style={{backgroundColor:'#fff',marginTop:2}}>
    <View  style={styles.extendView}>
      <View style={styles.topText} >
        <Text style={styles.trending}>Trending</Text>
        <Text style={styles.new}>new</Text>
      </View>
      <View style={styles.rowViewTop}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.reviewRowView}>
        <Text style={styles.ratings}>
          4.3
        </Text>
        <AnIcon style={[styles.icon,{color:'#ffb917',fontSize:11}]} name='star'/>
        <View style={styles.line}></View>
        <Text style={styles.reviews}>762 Reviews</Text>
      </View>
      <Text style={{marginTop:8,fontFamily:'OpenSans-Medium',marginBottom:3}} >Select Colour</Text>
      <View style={{ width:'100%',height:0.6,backgroundColor:'#aaa',marginBottom:12,marginTop:10}}></View>
      <View style={styles.radioContainer}>
        {
          nestedHairColorRadioData.map((item)=>{
            const {id,title,perStreak,text,time,price,priceCross,off} = item
            return (<View key={id} style={styles.radioItem}>
              <View style={styles.itemTitleRow}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.itemTitle}>{title}</Text>
                  <Text style={styles.perStreak}>{perStreak}</Text>
                </View>
                <RadioButton
                  style={styles.radioButton}
                  value={id}
                  color='#eb6165'
                  status={ checked === id ? 'checked' : 'unchecked' }
                  onPress={() => setChecked(id)}
                />
              </View>
              <Text style={styles.radioText}>{text}</Text>
              <View style={styles.rowTimer}>
                <MaIcon style={[styles.icon,{color:'#2b2a29'}]} name='alarm'/>
                <Text style={styles.time}>{time}</Text>
              </View>
              <View style={styles.priceView}>
                  <Text style={styles.price}>{price}</Text>
                  <Text style={styles.priceCross}>{priceCross}</Text>
                  <Text style={styles.off}>{off}</Text>
              </View>
              <View style={[length!== id ? styles.borderDashed:{marginBottom:10}]}></View>
            </View>)
          })
        }
      </View>

      {/* <View style={styles.rowTimer}>
          <MaIcon style={[styles.icon,{color:'#2b2a29'}]} name='alarm'/>
        <Text style={styles.time}>
          60 mins
        </Text>
      </View> */}
      {/* <View style={styles.priceView}>
        <View style={styles.leftView}>
          <Text style={styles.price}>₹3,500</Text>
          <Text style={styles.priceCross}>₹3,500</Text>
          <Text style={styles.off}>10% OFF</Text>
        </View>
      </View> */}
    </View>
</View> 
    <View style={styles.logoContainer}>
      {
        flatIconImageHairColor.map(item=>{return(
          <View key={item.id} style={styles.item}>
            <Image style={styles.logoImage} source={item.image} />
            <View style={styles.logoTextView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.logoItemText}>{item.text}</Text>
            </View>
          </View>
        )})
      }
    </View>
</>)
}

export default TrendingSection

const styles = StyleSheet.create({
  extendView:{
    flex: 1,
    width:'90%',
    alignSelf:'center',
  },
  topText:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
  },
  trending:{
    color:'#ff1d62',
    borderWidth:2,
    borderColor:'#ff1d62',
    borderRadius:8,
    backgroundColor:'#ffecf2',
    textTransform:'uppercase', 
    fontSize:11.4,
    fontWeight:'bold',
    paddingVertical:4,
    paddingHorizontal:8,
    textAlign:'center',
  },
  rowViewTop:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height:60,
  },
  new:{
    color:'#6f67ff',
    borderWidth:2,
    borderColor:'#6f67ff',
    borderRadius:8,
    backgroundColor:'#dddbff',
    textTransform:'uppercase', 
    fontSize:11.4,
    fontWeight:'bold',
    paddingVertical:4,
    paddingHorizontal:10,
    marginLeft:10,
    textAlign:'center',
  },
  titleText:{
    color:'#2b2a29',
    fontSize:16.6,
    fontFamily:'OpenSans-ExtraBold',
    // backgroundColor:'red',
    width:'77%',
    marginVertical:10,
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
    backgroundColor:'#aaa',
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
    justifyContent: 'flex-start',
    paddingBottom:12,
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
  icon:{
    fontSize:14,
  },
  logoContainer:{
    width:'100%',
    backgroundColor:'#f5f6f8',
    height:150,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  item:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImage:{
    width:45,
    height:45,
    marginBottom:5,
    alignSelf:'center'
  },
  title:{
    fontSize:11.4,
    fontFamily:'OpenSans-ExtraBold',
  },
  logoTextView:{
    marginLeft:8,
  },
  logoItemText:{
    fontSize:11.8,
    color:'#b6b6b5',
  },
  radioContainer:{
    backgroundColor:'#fff',
    marginVertical:6,
  },
  radioItem:{
    backgroundColor:'#fff',
  },
  itemTitleRow:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemTitle:{
    color:'#000',
    fontSize:15,
    fontFamily:'OpenSans-Bold',
  },
  perStreak:{
    color:'#b6b6b5',
    marginLeft:6,
    fontSize:13,
  },
  radioButton:{
    fontSize:17,
  },
  radioText:{
    fontFamily:'OpenSans-Medium',
    fontSize:13,
    color:'#525252',
  },
  borderDashed:{
    width:'100%',
    height:0,
    borderColor:'#ddd',
    borderWidth:0.6,
    borderStyle:'dashed',
    borderRadius:0.9,
    marginBottom:12,
    marginTop:10
  }
})
