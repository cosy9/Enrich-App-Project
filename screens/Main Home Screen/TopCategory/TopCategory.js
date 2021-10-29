import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import Icon  from 'react-native-vector-icons/AntDesign'
import categoryData from '../../../assets/data/categoryData'
import FlatListItem from './FlatListItem'

const TopCategory = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>Top category offer</Text>
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
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
            useNativeDriver:false,
        })}
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        renderItem={({item}) => <FlatListItem item={item} />}
      />
      <View style={styles.expandedStyle}>     
        <ExpandingDot
            data={categoryData}
            expandingDotWidth={15}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            inActiveDotColor={'#2f2f2f'}
            activeDotColor={'#000'}
            dotStyle={styles.dotStyle}
            containerStyle={{
                top: 0,
            }}
        />
      </View>  
    </View>
  )
}

export default TopCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:9,
    marginBottom:28,
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
  expandedStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9,
  },
  dotStyle:{
    width: 8,
    height: 8,
    backgroundColor: '#2f2f2f',
    borderRadius: 5,
    marginHorizontal: 5
  },
})
