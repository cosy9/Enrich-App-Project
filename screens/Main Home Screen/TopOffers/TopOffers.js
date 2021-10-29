import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import offerData from '../../../assets/data/offerData'
import FlatListItem from './FlatListItem'

const TopOffers = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>Top Offers For You</Text>
      </View>
      <View style={styles.FlexItemWrap}>
      {offerData.map((item)=>{
        return <FlatListItem
                  key={item.id} item={item}
              />
      })}
      </View>
    </View>
  )
}

export default TopOffers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:9,
    marginBottom:28,
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
