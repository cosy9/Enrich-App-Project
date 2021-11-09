import React from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements';
import CustomerReview from './CustomerReview/CustomerReview';
import Description from './Description/Description';
import ManicureBottomImages from './ManicureBottomImages/ManicureBottomImages';
import NestedHeader from './NestedHeader/NestedHeader';
import Recommended from './Recommended/Recommended';
import ServicesDescription from './ServicesDescription/ServicesDescription';
import TopSelectList from './TopSelectList/TopSelectList';
import TrendingSection from './TrendingSection/TrendingSection';
import VideoPlayerList from './VideoPlayer/VideoPlayerList';

const ManiCure = ({route, navigation}) => {
  const {category,title } = route.params;
  // console.log(category+'&'+title);
  return (<>
  <ScrollView style={styles.scrollStyle}>
      <NestedHeader category={category} />
      <VideoPlayerList/>
      <TrendingSection  title={title}/>
      <TopSelectList/>
      <ServicesDescription title={title} />
      <Divider width={15} color="#f5f6f8"/>
      <Description/>
      <CustomerReview/>
      <Divider width={10} color="#f5f6f8"/>
      <Recommended/>
      <ManicureBottomImages/>
  </ScrollView>
</>)
}

export default ManiCure

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    paddingBottom:2,
    backgroundColor:'#F5F6F8',
  },
})
