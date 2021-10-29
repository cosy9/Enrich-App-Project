import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import offerData from '../../../assets/data/offerData'
import MoreItem from './MoreItem'

const MoreOffers = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>More Offers For You</Text>
      </View>
      <View style={styles.FlexItemWrap}>
      {offerData.map((item)=>{
        return <MoreItem key={item.id} item={item} />
      })}
      </View>
    </View>
  )
}

export default MoreOffers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:12,
    backgroundColor:'#f5f6f8',
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:7,
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
