import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
const FlatListItem = ({item}) => {
    const {title,text1,text2,text3,image} = item
    return (
        <View style={styles.container}>
            <ImageBackground imageStyle={{borderRadius:8}} style={styles.bgimage} source={image}>
                <Text style={styles.text}>
                    <Text style={styles.textBold}>
                        {title}
                    </Text>
                    {text1}
                </Text>
                <Text style={styles.text}>
                    {text2}
                    <Text style={styles.textBold}>
                        {text3}
                    </Text>
                </Text>
            </ImageBackground>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    bgimage:{
        resizeMode:'contain',
        width:280,
        height:70,
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:15,
        fontWeight:'normal',
    },
    textBold:{
        fontSize:17.6,
        fontWeight:'bold'
    },
})
