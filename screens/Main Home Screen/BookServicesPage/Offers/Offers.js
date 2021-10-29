import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OfferItem from './OfferItem'
import bookPageOfferData from '../../../../assets/data/bookPageOfferData'


const Offers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>
        Offers You Can't Afford To Miss
      </Text>
      <View style={styles.FlexItemWrap}>
      {bookPageOfferData.map((item)=>{
        return <OfferItem key={item.id} item={item}/>
      })}
      </View>
    </View>
  )
}

export default Offers

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#e5edffa1",
    paddingBottom:20,
  },
  topText:{
    fontSize:19.5,
    fontWeight:"bold",
    paddingLeft:20,
    marginVertical:20,
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
