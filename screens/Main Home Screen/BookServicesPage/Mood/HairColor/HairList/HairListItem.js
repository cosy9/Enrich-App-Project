import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import extendedServices from '../../../../../../assets/data/extendedServices';
import ExtendedComponent from './ExtendedComponent/ExtendedComponent';
import AntIcon from 'react-native-vector-icons/AntDesign';
// import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const HairListItem = ({item,isTrue}) => {
  const [showData,setShowData] = useState(false);
  const {title,services,text,isMale} = item;
  const [extendedData,setExtendedData] = useState(extendedServices)
  // const [isAdded,setIsAdded]=useState(false)

  // console.log(isMale)
  const handleClick = (title)=>{
    let filteredData = extendedData.filter(item=>item.category===title && isTrue)
    setExtendedData(filteredData)
    // console.log(filteredData,'filteredData');
    if(filteredData.length === 0) return;
    setShowData(!showData);
  }

  const handleOperation = (operation,id)=>
  {
    if(operation ==='inc'){
      let newData =[...extendedData]
      newData.map(item=>{
        if(item.id === id){
          item.quantity++;
        }
      })
      setExtendedData(newData)
      return
    } else if(operation ==='dec'){
      let newData =[...extendedData]
      newData.map(item=>{
      if(item.id === id){
        if(item.quantity === 1){
          item.isAdded = false
          return
        }
        item.quantity--;
      }
    })
    setExtendedData(newData)
    } else if(operation ==='add'){
      let newData =[...extendedData]
      newData.map(item=>{
        if(item.id === id){
          item.isAdded = true
          return
        }
      })
      setExtendedData(newData)
    // console.log('clicked',operation,id);
    }
  }
  return(<>
  <TouchableOpacity onPress={()=>handleClick(title)} style={styles.item}>
    <View style={styles.itemPadded}>
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{title}</Text>
      {showData ? 
      <AntIcon style={styles.icon} name='upcircleo'/>
      :
      <AntIcon style={styles.icon} name='downcircleo'/>}
    </View>
    <Text style={styles.services}>{services}</Text>
    <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
    {showData && <View style={styles.showData}>
      {
        extendedData.map((item)=><ExtendedComponent key={item.id} item={item} handleOperation={handleOperation} />)
      }
      </View>}
  </> 
  )
}

export default HairListItem

const styles = StyleSheet.create({
  item:{
    width:'100%',
    paddingVertical:12,
    justifyContent:'center',
    backgroundColor:'#f5f6f8',
    borderBottomWidth:2,
    borderBottomColor:'#edeef0',

  },
  itemPadded:{
    width:'90%',
    alignSelf:'center'
  },
  titleView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  titleText:{
    fontSize:24,
    textTransform:'uppercase',
    fontFamily:'OpenSans-Bold',
  },
  icon:{
    fontSize:24,
    color:'#1e1e1e'
  },
  services:{
    fontSize:16.7,
    fontFamily:'OpenSans-Bold',
    marginTop:4,
  },
  text:{
    color:'#696968',
    fontFamily:'OpenSans-Medium',
    marginVertical:9,
    fontSize:10.4,
  },
    showData:{
    backgroundColor:'#fff',
    width:'100%',
  }
})
