import React from 'react'
import { ScrollView,StyleSheet} from 'react-native'
import Header from '../Header'
import ImageHeader from '../ImageHeader'
import ShopMore from '../ShopMore/ShopMore'
import FlatListImages from './FlatListImages/FlatListImages'
import NewArrivals from './NewArrivals/NewArrivals'
import SpecialSelection from './SpecialSelection/SpecialSelection'
import StoreInFocus from './StoreInFocus/StoreInFocus'
import TopCategory from './TopCategory/TopCategory'
import TopOffersInHair from './TopOffersInHair/TopOffersInHair'
import TopOffersInMakeup from './TopOffersInMakeup/TopOffersInMakeup'
import TopOffersInSkin from './TopOffersInSkin/TopOffersInSkin'
import SummerOfBeauty from './SummerOfBeauty/SummerOfBeauty'
import MoreOffersForYou from './MoreOffersForYou/MoreOffersForYou'
import Salon from './Salon/Salon'
import EditorPick from './EditorPick/EditorPick'
import ShopByConcern from './ShopByConcern/ShopByConcern'
import CategoryInFocus from './CategoryInFocus/CategoryInFocus'
import TopProfessional from './ShopByBrand/TopProfessional'
import BottomIcons from './BottomIcons/BottomIcons'

const BuyProductsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollStyle}>
      <Header/>
      <ImageHeader/>
      <FlatListImages/>
      <ShopMore/>
      <TopCategory/>
      <StoreInFocus/>
      <TopOffersInHair/>
      <TopOffersInSkin/>
      <TopOffersInMakeup/>
      <NewArrivals/>
      <SpecialSelection/>
      <SummerOfBeauty/>
      <MoreOffersForYou/>
      <Salon/>
      <EditorPick/>
      <ShopByConcern/>
      <CategoryInFocus/>
      <TopProfessional/>
      <BottomIcons/>
    </ScrollView>
  )
}

export default BuyProductsPage

const styles = StyleSheet.create({
  scrollStyle:{
    flexGrow: 1,
    backgroundColor:'#fff',
    paddingBottom:30,
  },
})
