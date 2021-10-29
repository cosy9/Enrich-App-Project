import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import moodData from '../../../../assets/data/moodData'
import MoodItem from './MoodItem'

const Mood = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>What are you in the moods for?</Text>
      {
        moodData.map((item)=>{
          return ( <MoodItem key={item.id} item={item} />)
        })
      }
    </View>
  )
}

export default Mood

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginBottom:10,
    marginTop:24,
  },
  textTop:{
    backgroundColor:'#2b2a29',
    fontSize:18.3,
    borderRadius:8,
    width:'90%',
    color:'#fff',
    paddingLeft:14,
    paddingVertical:24,
    fontWeight:'bold',
    textTransform:'capitalize',
  }
})
