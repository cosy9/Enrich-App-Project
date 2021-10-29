import React from 'react';
import { Image, StatusBar, Text, View,StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../assets/colors/colors';
import data from '../assets/data/data';

const Onboard = ({onDone}) => {

  const renderItem = ({item})=>{
    const {image,title,text} = item
    return(
      <View style={styles.slide}>
        <Image style={styles.image} source={image}/>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    )
  }

  const keyExtractor = (item) =>item.id

  const renderDoneButton = ()=>{
    return(
      <View>
        <Text style={styles.done}>Done</Text>
      </View>
    )
  }
  const renderNextButton = ()=>{
    return(
      <View style={styles.iconView}>
        <Icon
          name="arrowright"
          style={styles.icon}
          size={24}
        />
      </View>
    )
  }

  const handleDone = ()=>{
      onDone()
  }


  return <>
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          data={data}
          onDone={handleDone}
        />
      </View>
  </>
}

const styles = StyleSheet.create({
  slide:{
    flex:1,
    alignItems:'center',
  },
  image:{
    height:580,
    resizeMode:'cover',
  },
  content:{
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden',
    width:'100%',
    top:-10,
    paddingTop:16,
    paddingLeft:16,
    backgroundColor:'#fff'
  },
  title:{
    fontSize:26.6,
    color:colors.textColor,
    
  },
  text:{
    fontSize:16,
    color:colors.textColor,
    paddingTop:10,
  },
  icon:{
    fontSize:26,
    fontWeight:'700',
    paddingVertical:5,
    paddingHorizontal:5,
    color:colors.arrowBgColor,
    textAlign:'center',
    borderColor:colors.arrowBgColor,
    borderWidth:1.2,
    borderRadius:50
  },
  dotStyle:{
    backgroundColor:colors.dotsColor,
    fontSize:11,
  },
  activeDotStyle:{
    backgroundColor:colors.dotsFocusColor
  },
  done:{
    color:colors.textColor,
    fontWeight:'600',
    marginTop:9,
  },
})


export default Onboard;
