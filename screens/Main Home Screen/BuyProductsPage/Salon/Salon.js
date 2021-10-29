import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import buyNowSalonData from '../../../../assets/data/buyNowSalonData'
import FlatListItem from './FlatListItem'

const Salon = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>Bring The Salon Home</Text>
      </View>
      <FlatList
        data={buyNowSalonData} 
        keyExtractor={(item)=> item.id}
        horizontal
        showHorizontalScrollIndicator={false}
        renderItem={({item}) => <FlatListItem item={item} />}
      /> 
    </View>
  )
}

export default Salon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:-3,
    paddingTop:5,
    paddingBottom:40,
    backgroundColor:'#f5f6f8',
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:7,
    paddingBottom:20,
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
