import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageHeader = () => {
    return (
        <View style={styles.ImageHeader}>
            <Text style={styles.text}>We Are Following All Hygiene Standards To Ensure Safe Delivery Of Your Essentails</Text>
            <Image style={styles.image} source={require('../../assets/Images/food-delivery.png')} />
        </View>
    )
}

export default ImageHeader

const styles = StyleSheet.create({
    ImageHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        backgroundColor:'#ffefdd',
        marginTop:10,
    },
    text:{
        fontSize:11.4,
        fontFamily:'OpenSans-SemiBold',
        width:'60%',
    },
    image:{
        width:90,
        height:70,
    },
})
