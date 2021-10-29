import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import buyNowPageTopOfferInHairData from '../../../../assets/data/buyNowPageTopOfferInHairData'
import TopOffersItem from './TopOffersItem'

const TopOffersInHair = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>Top Offers In Hair</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {buyNowPageTopOfferInHairData.map((item)=>{
      return <TopOffersItem
                key={item.id} item={item}
            />
    })}
    </View>
  </View>
  )
}

export default TopOffersInHair

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:35,
    marginBottom:0,
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
