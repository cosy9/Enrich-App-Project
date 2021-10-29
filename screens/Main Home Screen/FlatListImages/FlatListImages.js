import React,{ useRef } from 'react'
import { FlatList, StyleSheet, Text, View,Animated } from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import flatListData from '../../../assets/data/flatListData'
import FlatListItem from './FlatListItem'
const FlatListImages = () => {
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container} > 
        <View>
            <FlatList 
            data={flatListData} 
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
            renderItem={({item}) => <FlatListItem item={item} 
/>}
            />    
        </View>
        <View style={styles.expandedStyle}>     
            <ExpandingDot
                data={flatListData}
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

export default FlatListImages

const styles = StyleSheet.create({
    container:{
        marginTop:18,
        width: '100%',
        height:300,
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
