import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import buyNowPageShopByConcernData from '../../../../assets/data/buyNowPageShopByConcernData'
import ShopByConcernItem from './ShopByConcernItem'

const ShopByConcern = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>Shop By Concern</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {buyNowPageShopByConcernData.map((item)=>{
      return <ShopByConcernItem key={item.id} item={item} />
    })}
    </View>
  </View>
  )
}

export default ShopByConcern

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
