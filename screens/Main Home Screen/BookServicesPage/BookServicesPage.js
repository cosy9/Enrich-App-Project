import React from 'react'
import { ScrollView,StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import Header from '../Header'
import AfterCare from './AfterCare/AfterCare';
import BgImageContent from './BgImageContent/BgImageContent';
import BookAppointment from './BookAppointment/BookAppointment';
import BottomImage from './BottomImage/BottomImage';
import CheckOutServices from './CheckOutServices/CheckOutServices';
import DiscountImage from './DiscountImage/DiscountImage';
import GiftImage from './GiftImage/GiftImage';
import HairFree from './HairFree/HairFree';
import ImageScroll from './ImageScroll/ImageScroll'
import IndulgentTreats from './IndulgentTreats/IndulgentTreats';
import LuxuriousServices from './LuxuriousServices/LuxuriousServices';
import Mood from './Mood/Mood';
import Offers from './Offers/Offers';
import PopularMakeupServices from './PopularMakeupServices/PopularMakeupServices';
import PopularSkinServices from './PopularSkinServices/PopularSkinServices';
import Reviews from './Reviews/Reviews';
import ShopByBrand from './ShopByBrand/ShopByBrand';
import TopFaves from './TopFaves/TopFaves';
import TrendingPamper from './TrendingPamper/TrendingPamper';

const BookServicesPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollStyle}>
        <Header/>
        <ImageScroll/>
        <Divider width={15} color="#f5f6f8"/>
        <Mood/>
        <BookAppointment/>
        <CheckOutServices/>
        <PopularSkinServices/>
        <PopularMakeupServices/>
        <BgImageContent/>
        <HairFree/>
        <TopFaves/>
        <Offers/>
        <IndulgentTreats/>
        <TrendingPamper/>
        <GiftImage/>
        <LuxuriousServices/>
        <AfterCare/>
        <ShopByBrand/>
        <DiscountImage/>
        <Reviews/>
        <BottomImage/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    backgroundColor:'#fff',
    paddingBottom:2,
  }
})

export default BookServicesPage