import React,{ useRef } from 'react'
import { FlatList, StyleSheet, Text, View,Animated } from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import bottomImageData from '../../../assets/data/bottomImageData'
import FlatListItem from './FlatListItem'
const BottomImages = () => {
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container} > 
            <FlatList 
            data={bottomImageData} 
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
        <View style={styles.expandedStyle}>     
            <ExpandingDot
                data={bottomImageData}
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

export default BottomImages

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        width: '100%',
    },
    expandedStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    dotStyle:{
        width: 8,
        height: 8,
        backgroundColor: '#2f2f2f',
        borderRadius: 5,
        marginHorizontal: 5
    },
})
