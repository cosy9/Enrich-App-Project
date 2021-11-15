import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import AnIcon from 'react-native-vector-icons/AntDesign';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import topSelectListHairData from '../../../../../assets/data/topSelectListHairData'
import femaleAddMoreData from '../../../../../assets/data/femaleAddMoreData'
import haircutData from '../../../../../assets/data/haircutData'
import HairColorHeader from './HairColorHeader/HairColorHeader'
import HairList from './HairList/HairList'
import TopSelectList from './TopSelectList/TopSelectList'

  let filteredDataHair = haircutData.filter(item=>item.category === 'Hair')
  // console.log(filteredDataHair,'filteredDataHair');

const HairColor = () => {
  const [isTrue,setIsTrue]=useState(true) // male or female
  const [selectedData,setSelectedData] = useState(topSelectListHairData) // category list 
  const [allData,setAllData] = useState(haircutData) // all data list
  const [filteredData,setFilteredData] = useState(filteredDataHair) // all data but filtered
  const [isSnack,setIsSnack] = useState(false)
  const [topData,setTopData] = useState(null)
  const [femaleExtendedData,setFemaleExtendedData] = useState(femaleAddMoreData)
  // console.log(femaleExtendedData,'female data');
  let length = femaleExtendedData.length.toString() ? femaleExtendedData.length.toString():0

  const handleIsTrue = (isTrue) => {
    let {title:category} = selectedData.find(item=>item.checked === true);
    console.log(category)
    console.log(isTrue,'isTrue')
    if(isTrue) { // if its male
      let maleFilterData = [...allData]
    // console.log(maleFilterData,'maleFilterData before');
      let maleData = maleFilterData.filter(item => {return item.isMale === true && item.category === category} )
        // console.log(maleData,'maleFilterData');
        setFilteredData(maleData)
      return
    }
    let femaleFilterData = [...allData]
    // console.log(femaleFilterData,'femaleFilterData before');
    let femaleData = femaleFilterData.filter(item => {return item.isMale === false && item.category === category} )
    // console.log(femaleData,'femaleFilterData');
    setFilteredData(femaleData)
    return
  }

  useEffect(()=>{
    handleIsTrue(isTrue)
  },[isTrue,selectedData])

  const updateChecked = (valueIndex,category) =>{
    // console.log('updated',category);
    let array = [...selectedData]
    array.map((item,index) =>{  
      index === valueIndex ? (array[index]['checked']=true):(array[index]['checked']=false)
      // index === valueIndex ? setIsTrending('Value Packages'):setIsTrending('Trending') 
    })
    setSelectedData(array)
    let array2 = [...allData]
    let filteredArray = array2.filter((item)=>{return item.category === category})
    // console.log(filteredArray ,'filteredArray');
    setFilteredData(filteredArray)
  }

  const handleOperation = (operation,id)=>
  {
    if(operation ==='inc'){
      // console.log(obj,'id');
      let newData =[...femaleExtendedData]
      newData.map(item=>{
        if(item.id === id){
          item.quantity++;
        }
      })
      setFemaleExtendedData(newData)
      return
    } else if(operation ==='dec'){
      let newData =[...femaleExtendedData]
      newData.map(item=>{
      if(item.id === id){
        if(item.quantity === 1){
          item.isAdded = false
          return
        }
        item.quantity--;
      }
    })
    setFemaleExtendedData(newData)
    } else if(operation ==='add'){
      let newData =[...femaleExtendedData]
      newData.map(item=>{
        if(item.id === id){
          item.isAdded = true
          return
        }
      })
      setFemaleExtendedData(newData)
    // console.log('clicked',operation,id);
    }
  }



  // console.log(selectedData);
  return (<>
        <View>
          <HairColorHeader isTrue={isTrue} />
          <TopSelectList selectedData={selectedData} updateChecked={updateChecked} />
        </View>
      <ScrollView style={styles.scrollStyle}>
        <HairList 
          isTrue={isTrue} 
          setIsTrue={setIsTrue} 
          filteredData={filteredData} 
          setAllData={setAllData}
          setIsSnack={setIsSnack}
          setTopData={setTopData}
          femaleAddMoreData={femaleAddMoreData}
          setFemaleExtendedData={setFemaleExtendedData}
          />
      </ScrollView>
      {isSnack && <><View onPress={()=>console.log('view pressed')} style={styles.snackContainer}></View>
        <View style={styles.snackData}>
          <View style={styles.snackWrapper}>
            <View style={styles.topTitleRow}>
              <Text style={styles.topTitle}>{topData.title}</Text>
              <TouchableOpacity onPress={()=>setIsSnack(false)}>
                <Entypo style={{color:'#000',fontSize:26}} name='cross' />
              </TouchableOpacity>
            </View>
            <View style={[styles.reviewRowView,]}>
              <View style={styles.leftRowReview}>
                <Text style={styles.ratings}>{topData.ratings}</Text> 
                <AnIcon style={[styles.icon,{color:'#ffb917',fontSize:11}]} name='star'/>
                <View style={styles.line}></View>
                <Text style={styles.reviews}>{topData.reviews}</Text>
              </View>
          </View>
          <View style={{width:'100%',height:1,backgroundColor:'#ddd',marginTop:18}}></View>
          {
            femaleExtendedData.map((item)=>{
              const {category,title,perStreak,text,time,price,priceCross,off,isAdded,quantity,id} = item
              return(
                <View key={id} style={styles.radioItem}>
                <View style={styles.itemTitleRow}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.itemTitle}>{title}</Text>
                    <Text style={styles.perStreak}>{perStreak}</Text>
                  </View>
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
                <View style={[styles.borderDashed]}></View>
              </View>)
            })
          }
          </View>
        </View>
        </>}
  </>)
}

export default HairColor

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    paddingBottom:2,
    // backgroundColor:'pink',
  },
  snackContainer:{
    position: 'absolute',
    bottom:0,
    width:'100%',
    height:'100%',
    backgroundColor:'#000',
    elevation:1,
    opacity:0.5,
  },
  snackData:{
    backgroundColor:'#fff',
    height:'70%',
    width:'100%',
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    elevation:3,
  },
  snackWrapper:{
    width:'90%',
    // backgroundColor:'red',
    alignSelf:'center',
  },
  topTitleRow:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:16,
  },
  topTitle:{
    fontFamily:'OpenSans-Medium',
  },
  reviewRowView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  icon:{
    fontSize:14,
  },
  radioItem:{
    backgroundColor:'#fff',
    marginTop:15,
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
    paddingBottom:8,
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
    marginHorizontal:6,
  },
  off:{
    color:'#eb6165',
    textTransform:'uppercase',
    fontSize:15.4,
    fontWeight:'bold',
  },
})
