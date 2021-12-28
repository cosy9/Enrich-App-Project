import React, { useRef } from 'react'
import { FlatList, StyleSheet, Text, View,Animated, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/AntDesign'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import bottomManicureImagesData from '../../../../../../../assets/data/bottomManicureImagesData'
import FlatListItem from './FlatListItem'

const ManicureBottomImages = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container} > 
          <View style={styles.TopView}>  
        <Text style={styles.TopText}>Our Irresistible Offers</Text>
        <TouchableOpacity><Icon style={styles.TopIcon} name='arrowright' /></TouchableOpacity>
      </View>
        <FlatList 
        data={bottomManicureImagesData} 
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
                data={bottomManicureImagesData}
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

export default ManicureBottomImages

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:12,
    width: '100%',
    backgroundColor:'#f5f6f8',
    paddingBottom:28,
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:7,
    marginBottom:10,
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
