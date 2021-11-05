import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import NestedHeader from './NestedHeader/NestedHeader';
import VideoPlayerList from './VideoPlayer/VideoPlayerList';

const ManiCure = ({route, navigation}) => {
  const {category,title } = route.params;
  // console.log(category+'&'+title);
  return (<>
  <ScrollView style={styles.scrollStyle}>
      <NestedHeader category={category} />
      {/* <VideoPlayerList/> */}
  </ScrollView>
</>)
}

export default ManiCure

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    paddingBottom:2,
  },
})
