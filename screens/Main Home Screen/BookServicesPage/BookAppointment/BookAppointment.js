import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import bookAppointmentData from '../../../../assets/data/bookAppointmentData'
import BookAppointmentItem from './BookAppointmentItem'

const BookAppointment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>Book An Appointment</Text>
      {
        bookAppointmentData.map((item)=>{
          return (<BookAppointmentItem key={item.id} item={item}/>)
        })
      }
    </View>
  )
}

export default BookAppointment

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
