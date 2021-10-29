import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconItem from './IconItem'
import buyNowPageBottomIcons from '../../../../assets/data/buyNowPageBottomIcons'

const BottomIcons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexParent}>
        {
          buyNowPageBottomIcons.map((item)=>{
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
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent: 'center',
    marginTop:20,
    paddingTop:20,
    paddingBottom:10,
  },
  flexParent:{
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems:'center',
    width: '90%',
    borderRadius: 7,
    backgroundColor:'#2b2a29',
  }
})
