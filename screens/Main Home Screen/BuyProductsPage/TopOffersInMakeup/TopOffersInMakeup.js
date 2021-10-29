import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import buyNowPageTopOffersInMakeupData from '../../../../assets/data/buyNowPageTopOffersInMakeupData'
import TopOffersItem from './TopOffersItem'

const TopOffersInMakeup = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>Top Offers In Makeup</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {buyNowPageTopOffersInMakeupData.map((item)=>{
      return <TopOffersItem
                key={item.id} item={item}
            />
    })}
    </View>
  </View>
  )
}

export default TopOffersInMakeup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:18,
    marginBottom:2,
    backgroundColor:'#fff',
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
