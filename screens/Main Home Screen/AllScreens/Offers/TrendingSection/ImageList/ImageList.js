import React from 'react'
import {StyleSheet, Text, View,Animated, TouchableOpacity} from 'react-native'
import offerPageListImages from '../../../../../../assets/data/offerPageListImages'
import ImageListItem from './ImageListItem'

const TopOffers = () => {

  return (
    <View style={styles.container}>
      <View style={styles.FlexItemWrap}>
      {offerPageListImages.map((item)=>{
        return <ImageListItem
                  key={item.id} item={item}
              />
      })}
      </View>
    </View>
  )
}

export default TopOffers

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:9,
    marginBottom:28,
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
