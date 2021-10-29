import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import buyNowPageTopOfferInSkinData from '../../../../assets/data/buyNowPageTopOfferInSkinData'
import TopOffersItem from './TopOffersItem'


const TopOffersInSkin = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>Top Offers In Skin</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {buyNowPageTopOfferInSkinData.map((item)=>{
      return <TopOffersItem
                key={item.id} item={item}
            />
    })}
    </View>
  </View>
  )
}

export default TopOffersInSkin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:18,
    marginBottom:8,
    backgroundColor:'#f5f6f8c4',
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
