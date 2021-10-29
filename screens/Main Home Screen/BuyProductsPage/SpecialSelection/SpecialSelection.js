import React, { useRef } from 'react'
import { FlatList, StyleSheet, Text, View,Animated } from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import specialSelectionData from '../../../../assets/data/specialSelectionData'
import FlatListItem from './FlatListItem'

const SpecialSelection = () => {
  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}> 
    <Text style={styles.topText}>Special Selection</Text>
        <FlatList 
        data={specialSelectionData} 
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
                data={specialSelectionData}
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

export default SpecialSelection

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:12,
    width: '100%',
    paddingBottom:12,
  },
  topText:{
    fontSize:22,
    color: '#2B2A29',
    fontWeight: 'bold',
    marginLeft:13,
    marginBottom:8,
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
