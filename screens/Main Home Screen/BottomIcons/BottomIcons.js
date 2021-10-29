import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconItem from './IconItem'
import bottomIconsData from '../../../assets/data/bottomIconsData'

const BottomIcons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexParent}>
        {
          bottomIconsData.map((item)=>{
            return <IconItem key={item.id} item={item}/>
          })
        }
      </View>
    </View>
  )
}

export default BottomIcons

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f6f8',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
    paddingTop:20,
    paddingBottom:40,
  },
  flexParent:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems:'center',
    width: '97%',
    borderRadius: 7,
    backgroundColor:'#2b2a29',
  }
})
