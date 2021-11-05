import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, TouchableOpacity, View,Switch,useWindowDimensions } from 'react-native'
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HairListItem from './HairListItem';
// import extendedServices from '../../../../../../assets/data/extendedServices';
// import ExtendedComponent from './ExtendedComponent/ExtendedComponent';
const HairList = ({filteredData,setAllData,isTrue,setIsTrue}) => {

  return (
    <View style={[styles.container]}>
    <View style={[{flexGrow:1}]}> 
      {
        filteredData.map((item)=>{
      return( <HairListItem key={item.id} item={item} isTrue={isTrue} /> )
        })
      }
    </View>
      <View style={styles.bottomIcons}>
        <View style={[styles.bottomIconView,styles.switchView]}>
        <Switch
          onValueChange={()=>setIsTrue(!isTrue)}
          value={isTrue}
          thumbColor={isTrue ? '#4bbdf8':'#ff7ac0'}
          style={styles.switch}
        />
        {isTrue ? <MaIcon style={[styles.icon,styles.men]} name='bow-tie'/>:<MaIcon style={[styles.icon,styles.women]} name='bow-tie'/>}
        {isTrue ?<Text style={styles.bottomText}>Men</Text>:<Text style={styles.bottomText}>Women</Text>}
        <View style={styles.borderRight}></View>
        </View>
        <View style={[styles.bottomIconView]}>
          <AntIcon style={styles.icon} name='filter' />
        <Text style={styles.bottomText}>Filter</Text>
        <View style={styles.borderRight}></View>
        </View>
        <View style={[styles.bottomIconView]}>
          <MaIcon style={styles.icon} name='arrow-up-down'/>
        <Text style={styles.bottomText}>Sort</Text>
        </View>
      </View>
    </View>
  )
}

// const HairListItem = ({item})=>{
//   const [showData,setShowData] = useState(false);
//   const {title,services,text,isMale} = item;
//   const [extendedData,setExtendedData] = useState(extendedServices)
//   const [isAdded,setIsAdded]=useState(false)
//   const handleOperation = (operation,id)=>{
//     if(operation ==='inc'){
//       let newData = extendedData.map(item=>{
//         if(item.id === id){
//           item.quantity +=1;
//         }
//       })
//       setExtendedData(newData)
//       return
//     } else if(operation ==='dec'){
//       let newData = extendedData.map(item=>{
//       if(item.id === id){
//         if(item.quantity === 0){
//           item.isAdded = false
//           return
//         }
//         item.quantity -=1;
//       }
//     })
//     setExtendedData(newData)
//     } else if(operation ==='add'){
//       let newData = extendedData.map(item=>{
//         if(item.id === id){
//           item.isAdded = true
//           return
//         }
//       })
//       setExtendedData(newData)
//     }
//   }

//   // console.log(isMale)
//   const handleClick = (title)=>{
//     if(title==='Naturaitual'){
//       setShowData(!showData);
//       // console.log('done');
//     }
//   }
//   return(<>
//   <TouchableOpacity onPress={()=>handleClick(title)} style={styles.item}>
//     <View style={styles.itemPadded}>
//     <View style={styles.titleView}>
//       <Text style={styles.titleText}>{title}</Text>
//       <AntIcon style={styles.icon} name='downcircleo'/>
//     </View>
//     <Text style={styles.services}>{services}</Text>
//     <Text style={styles.text}>{text}</Text>
//     </View>
//   </TouchableOpacity>
//     {showData && <View style={styles.showData}>
//       {
//         extendedData.map((item)=><ExtendedComponent key={item.id} item={item} isAdded={isAdded} setIsAdded={setIsAdded} handleOperation={handleOperation} />)
//       }
//       </View>}
//   </> 
//   )

// }

export default HairList

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f6f8',
    // backgroundColor:'red',
    height:'auto',
    position:'relative',

  },
  item:{
    width:'100%',
    paddingVertical:12,
    justifyContent:'center',
    backgroundColor:'#f5f6f8',
    borderBottomWidth:2,
    borderBottomColor:'#edeef0',
    marginBottom:8,

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
  bottomIcons:{
    width:'100%',
    height:67,
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    elevation:2,
  },
  bottomIconView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    width:60,
    position:'relative'
  },
  switch:{
    fontSize:20,
    transform:[{scaleX:1.2},{scaleY:1.2}],
    marginRight:4,
  },
  switchView:{
    position: 'relative',
  },
  men:{
    position: 'absolute',
    fontSize:28,
    color:'#4bbdf8',
    bottom:'-32%',
    right:'20%',
  },
  women:{
    position: 'absolute',
    fontSize:28,
    color:'#ff7ac0',
    top:'-26%',
    left:'-26%',
    transform:[{rotate:'-45deg'}]
  },
  bottomText:{
    fontSize:14.2,
    fontFamily:'OpenSans-Medium',
    textTransform: 'uppercase',
  },
  borderRight:{
    position: 'absolute',
    width:2,
    height:'40%',
    backgroundColor:'#ddd',
    top:'8%',
    right:'-89%',
    zIndex:2,
  },
  showData:{
    backgroundColor:'#fff',
    width:'100%',
  }
})
