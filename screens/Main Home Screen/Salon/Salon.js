import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import categoryData from '../../../assets/data/categoryData'
import FlatListItem from './FlatListItem'

const Salon = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>Bring The Salon Home</Text>
        <TouchableOpacity><Icon style={styles.TopIcon} name='arrowright' /></TouchableOpacity>
      </View>
      <FlatList
        data={categoryData} 
        keyExtractor={(item)=> item.id}
        horizontal
        showHorizontalScrollIndicator={false}
        pagingEnabled 
        bounceEnabled={false}
        bounces={false}
        decelerationRate={'normal'}
        renderItem={({item}) => <FlatListItem item={item} />}
      /> 
    </View>
  )
}

export default Salon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:9,
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:7,
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
