import React from 'react'
import { ImageBackground,StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import beautyData from '../../../assets/data/beautyData'
import BeautyItem from './BeautyItem'
import Icon  from 'react-native-vector-icons/AntDesign'

const Beauty = () => {

  return (
    <View style={styles.container}>
      <View style={styles.TopView}>  
        <Text style={styles.TopText}>Beauty Services</Text>
      </View>
      <View style={styles.FlexItemWrap}>
      {beautyData.map((item)=>{
        return <BeautyItem
                  key={item.id} item={item}
              />
      })}
        <View style={styles.itemView}>
            <ImageBackground source={require('../../../assets/Images/2.jpg')} style={styles.Image}
              imageStyle={{borderRadius: 10,opacity: 0.99}}
            >
            <View style={styles.textView}>
              <Text style={styles.textBold}>Home Services</Text>
              <Text style={styles.text2}>| 150+ Options</Text>
            <TouchableOpacity>
            <Icon name='right' style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </ImageBackground>
          </View>
      </View>
    </View>
  )
}

export default Beauty

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:16,
    marginBottom:28,
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:7,
  },
  TopText:{
    marginLeft:22,
    fontSize:19,
    marginBottom:16,
    fontWeight: 'bold',
    textTransform:'capitalize',
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemView:{
    width: '90.6%',
    height:210,
    margin:8,
  },
  textBold:{
    fontSize:19,
    textTransform:'uppercase',
    fontWeight:'bold',
    color:'#fff',
  },
  Image:{
    width: '100%',
    height: '100%',
  },
  textView:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height:'90%',
    marginTop:7,
    marginBottom:20,
    marginLeft:8,
  },
  text2:{
    fontSize:16,
    marginBottom:3,
    color:'#fff',
  },
  icon:{
    fontSize:14,
    color:'#000',
    marginBottom:5,
    backgroundColor:'#fff',
    padding:2,
    borderRadius:50,
    marginRight:9,
  },
})
