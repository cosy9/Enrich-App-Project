import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ServicesDescription = ({title}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.textStyle}>
        <Text style={styles.textBold}>{title} </Text>
        is a zesty hand spa treatment at Enrich that'll surely keep you coming back for more. This detan manicure clears away dead skin cells caused by tanning to leave your hands looking brighter and refreshed. The uplifting citrusy scent will invigorate your mood while this mani works to give you beautiful hands. 
      </Text>
    </View>
  )
}

export default ServicesDescription

const styles = StyleSheet.create({
  textView:{
    backgroundColor:'#fff',
    // backgroundColor:'red',
    paddingHorizontal:18,
  },
  textStyle:{
    fontFamily:'OpenSans-Medium',
    marginTop:18,
    fontSize:14,
    lineHeight:24,
    paddingBottom:18,
  },
  textBold:{
    fontFamily:'OpenSans-Bold',
    fontSize:14,
  },
})
