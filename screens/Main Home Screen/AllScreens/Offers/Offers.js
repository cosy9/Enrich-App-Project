import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import TopSelectList from './TopSelectList/TopSelectList'

const Offers = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollStyle}>
      <TopSelectList/>
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
    backgroundColor:'#fff',
    paddingBottom:2,
  },
})
