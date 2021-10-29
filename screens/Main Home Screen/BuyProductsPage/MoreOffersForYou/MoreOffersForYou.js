import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import buyNowPageMoreOfferData from '../../../../assets/data/buyNowPageMoreOfferData'
import MoreOfferItem from './MoreOfferItem'

const MoreOffersForYou = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>More Offers For You</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {buyNowPageMoreOfferData.map((item)=>{
      return <MoreOfferItem
                key={item.id} item={item}
            />
    })}
    </View>
  </View>
  )
}

export default MoreOffersForYou

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:18,
    paddingBottom:20,
    marginBottom:2,
    backgroundColor:'#f5f6f8',
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TopText:{
    marginLeft:22,
    fontSize:19,
    marginBottom:12,
    fontWeight: 'bold',
    textTransform:'capitalize',
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
