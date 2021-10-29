import React from 'react'
import { StyleSheet, Text, View,Image,useWindowDimensions } from 'react-native'
import FIcon from 'react-native-vector-icons/Foundation';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const FlatListItem = ({item}) => {
    const{title,image,bookAppointments,beauty,salon} = item;
    const {width} = useWindowDimensions() 
    return (
        <View style={[styles.container,{width}]}>
            <View style={styles.imageData}>
                <Image style={styles.image} source={image} />
                <Text style={styles.Imagetitle}>{title}</Text>
            </View>
            <View style={styles.bottomData}>
                <View style={styles.iconContainer}>
                    <FIcon style={styles.icons} name={bookAppointments.icon} />
                    <Text style={styles.textIcon}>{bookAppointments.title}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MIcon style={styles.icons} name={beauty.icon} />
                    <Text style={styles.textIcon}>{beauty.title}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MIcon style={styles.icons} name={salon.icon} />
                    <Text style={styles.textIcon}>{salon.title}</Text>
                </View>
            </View>
        </View>
    )
}

export default FlatListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageData:{
        flexDirection:'row',
        height:'80%',
        alignItems: 'center',
        backgroundColor:'#f0606f',
    },
    image:{
        flex:0.7,
        width:'100%',
        height:'100%',
    },
    Imagetitle:{
        flex:0.3,
        fontSize:21.7,
        fontStyle:'italic',
        fontWeight:'bold',
        paddingHorizontal:10,
        color:'#fff',

    },
    bottomData:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffd779',
        paddingVertical:5,
    },
    iconContainer:{
        flexDirection:'row',
        alignItems:'center',
        width: '22%',
        marginHorizontal:19,
    },
    icons:{
        fontSize:26,
        marginRight:5,
        padding:4,
        backgroundColor:'#fff',
        borderRadius:50,
        color:'#000',
    },
    textIcon:{
        fontSize:11.8,
        paddingRight:2,
    }
    })
