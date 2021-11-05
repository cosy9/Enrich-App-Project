import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity } from 'react-native'
// import VideoPlayer from 'react-native-video-player'


const FlatListItem = ({item}) => {
    const{video,thumbnail} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            {/* <VideoPlayer
              video={video}
              autoplay={false}
              defaultMuted={true}
              width={1500}
              height={1000}
              thumbnail={thumbnail}
            /> */}
            <Text>jhi</Text>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red',
        elevation:3,
        height:255,
    },
    })
