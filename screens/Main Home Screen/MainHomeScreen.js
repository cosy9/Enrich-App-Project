import React from 'react'
import {ScrollView, StyleSheet,} from 'react-native'
import { Divider } from 'react-native-elements';
import BookServices from './BookServices'
import FlatListImages from './FlatListImages/FlatListImages'
import Header from './Header'
import ImageHeader from './ImageHeader'
import Recommend from './Recommend/Recommend';
import Salon from './Salon/Salon';
import ShopMore from './ShopMore/ShopMore'
import TopCategory from './TopCategory/TopCategory'
import TopOffers from './TopOffers/TopOffers';
import TrendingServices from './TrendingServices/TrendingServices'
import Beauty from './Beauty/Beauty'
import JustIn from './JustIn/JustIn';
import MoreOffers from './MoreOffers/MoreOffers';
import BottomImages from './BottomImages/BottomImages';
import BottomIcons from './BottomIcons/BottomIcons';

const MainHomeScreen = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollStyle}>
          <Header/>
          <ImageHeader/>
          <FlatListImages/>
          <ShopMore/>
          <BookServices />
          <TrendingServices/>
          <Divider width={15} color="#f5f6f8"/>
          <TopCategory/>
          <Divider width={15} color="#f5f6f8"/>
          <Salon/>
          <Recommend/>
          <TopOffers/>
          <Divider width={10} color="#f5f6f8"/>
          <Beauty/>
          <JustIn/>
          <MoreOffers/>
          <BottomImages/> 
          <BottomIcons/>
      </ScrollView>
    )
}

export default MainHomeScreen

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    backgroundColor:'#fff',
    paddingBottom:2,
  },
    container:{
        flex: 1,
    },
})
