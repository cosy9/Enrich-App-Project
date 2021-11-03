import React, { useState } from 'react'
import { ScrollView, StyleSheet,} from 'react-native'
import TopSelectList from './TopSelectList/TopSelectList'
import TrendingSection from './TrendingSection/TrendingSection'
import ValuePackagesSection from './ValuePackagesSection/ValuePackagesSection'

const Offers = () => {
  const [isTrending,setIsTrending] = useState('Trending')
  return (
    <ScrollView contentContainerStyle={styles.scrollStyle}>
      <TopSelectList setIsTrending={setIsTrending}/>
      {isTrending === 'Trending' && <TrendingSection/>}
      {isTrending === 'Value Packages' && <ValuePackagesSection/>}
    </ScrollView>
  )
}

export default Offers

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle:{
    flexGrow: 1,
    backgroundColor:'#f5f6f8',
    paddingBottom:2,
  },
})
