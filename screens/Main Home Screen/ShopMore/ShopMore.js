import React,{useRef} from 'react'
import { FlatList, StyleSheet, Text, View,Animated} from 'react-native'
import {ExpandingDot} from "react-native-animated-pagination-dots";
import shopData from '../../../assets/data/shopData'
import FlatListItem from './FlatListItem'

const ShopMore = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    return (
        <View style={styles.container}>
            <Text style={styles.textBold}>Shop More. Save More.</Text>
            <View style={{flex: 1,}}>
            <FlatList
                data={shopData} 
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
            </View>
            <View style={styles.expandedStyle}>     
                <ExpandingDot
                    data={shopData}
                    expandingDotWidth={15}
                    scrollX={scrollX}
                    inActiveDotOpacity={0.6}
                    inActiveDotColor={'#2f2f2f'}
                    activeDotColor={'#000'}
                    dotStyle={styles.dotStyle}
                    containerStyle={{
                        top: -32,
                    }}
                />
            </View>  
        </View>
    )
}

export default ShopMore

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#f5f6f8', //
        // backgroundColor:'red', //
        height:184,
        marginTop:28,
    },
    textBold:{
        fontSize:19.5,
        fontWeight:'bold',
        paddingVertical:20,
        paddingLeft:20,
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
