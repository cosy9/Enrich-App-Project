import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions, TouchableOpacity, Button,Dimensions } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import { Video } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import VideoPlayer from 'expo-video-player'

const FlatListItem = ({item}) => {
    // const videoRef = React.useRef(null);
    // const [status, setStatus] = React.useState({});  
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const refVideo2 = useRef(null)
    const{video,thumbnail} = item;
    // console.log(video);
    const {width,height} = useWindowDimensions() 
    return (
        <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: Video.RESIZE_MODE_COVER,
          source: video,
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        style={{
          videoBackgroundColor: 'black',
          height: inFullscreen2 ? height : 360,
          width: inFullscreen2 ? width : width,
        }}
      />
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
