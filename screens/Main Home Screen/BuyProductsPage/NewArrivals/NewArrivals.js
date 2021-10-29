import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import buyNowPageNewArrivalsData from '../../../../assets/data/buyNowPageNewArrivalsData'
import FlatListItem from './FlatListItem'

const NewArrivals = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>New Arrivals</Text>
        <TouchableOpacity><Icon style={styles.TopIcon} name='arrowright' /></TouchableOpacity>
      </View>
      <FlatList
        data={buyNowPageNewArrivalsData} 
        keyExtractor={(item)=> item.id}
        horizontal
        showHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item} />}
      />
    </View>
  )
}

export default NewArrivals

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:9,
    backgroundColor:'#f5f6f8',
    paddingBottom:35,
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:7,
    paddingVertical:18,
  },
  TopText:{
    marginLeft:14,
    fontSize:19,
    fontWeight: 'bold',
    textTransform:'capitalize',
  },
  TopIcon:{
    fontSize:28,
    marginRight:14,
  },
})
