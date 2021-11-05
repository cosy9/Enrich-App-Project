import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity, ScrollView} from 'react-native'
import topSelectListHairData from '../../../../../assets/data/topSelectListHairData'
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
  // console.log(selectedData);
  return (<>
        <View>
          <HairColorHeader isTrue={isTrue} />
          <TopSelectList selectedData={selectedData} updateChecked={updateChecked} />
        </View>
      <ScrollView style={styles.scrollStyle}>
        <HairList isTrue={isTrue} setIsTrue={setIsTrue} filteredData={filteredData} setAllData={setAllData}/>
      </ScrollView>
  </>)
}

export default HairColor

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    paddingBottom:2,
    // backgroundColor:'pink',
  },
})
