import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity, Button } from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';

const FlatListItem = ({item}) => {
    const videoRef = React.useRef(null);
    const [status, setStatus] = React.useState({});  
    const{video,thumbnail} = item;
    // console.log(video);
    const {width} = useWindowDimensions() 
    return (
    <View style={[styles.container,{width}]}>
        <Video
            source={video}
            resizeMode="cover"
            isMuted={true}
            ref={videoRef}
        style={styles.video}
        useNativeControls
        isLooping={false}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:360,
    },
    video:{
        width:'100%',
        height:'100%',
    },
    })
