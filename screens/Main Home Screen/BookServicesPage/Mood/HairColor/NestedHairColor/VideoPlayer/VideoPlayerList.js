import React,{ useRef } from 'react'
import { FlatList, StyleSheet, Text, View,Animated, Image } from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import videoPlayerHairColorData from '../../../../../../../assets/data/videoPlayerHairColorData'
import FlatListItem from './FlatListItem'
const VideoPlayerList = () => {
    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <View style={styles.container} > 
        <View>
            <FlatList 
            data={videoPlayerHairColorData} 
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
                data={videoPlayerHairColorData}
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
        <View style={styles.textView}>
            <Image style={styles.image} source={require('../../../../../../../assets/Images/calendar.png')} />
            <Text style={styles.textBold}>1,357</Text>
            <Text style={styles.text}>bookings in last</Text>
            <Text style={styles.textBold}>24 hours</Text>
        </View>
        </View>
    )
}

export default VideoPlayerList

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height:460,
        // backgroundColor: 'red'
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
    textView:{
        flexDirection:'row',
        height:60,
        alignItems: 'center',
        backgroundColor:'#fff',
        marginTop:22,
        paddingLeft:18,
    },
    image:{
        width:20,
        height:20,
        resizeMode:'contain',
        marginRight:6,
    },
    textBold:{
        fontFamily:'OpenSans-ExtraBold',
        marginRight:6,
    },
    text:{
        fontFamily:'OpenSans-Medium',
        marginRight:6,
    },
})
