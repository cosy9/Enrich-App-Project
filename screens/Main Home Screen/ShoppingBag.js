import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'

const ShoppingBag = () => {
  const [isProductAdded,setIsProductAdded] = useState(false)
  if(!isProductAdded){
    return (
    <View style={styles.container}>
        <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/Images/shopping-bag.png')} >
          <Icons style={styles.icon} name='heart'/>
          </ImageBackground>
        <Text style={{fontWeight: 'bold',fontSize:14.3}}>
          Your shopping bag feels a little too light.
        </Text>
        <Text style={{fontWeight: 'bold',fontSize:14.3}}>
          Shop for some awesome beauty finds right now!
        </Text>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.textContainer}>
            <Text style={[styles.text,{color:'#000'}]}>add from wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.textContainer,{backgroundColor:'#eb6165'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>get shopping</Text>
          </TouchableOpacity>
      </View>
      </View>
    )
  } else{
  return (<View style={[styles.container]}>
    <Text>Products</Text>
  </View>)
  }

}

export default ShoppingBag

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
  image:{
    marginTop:-30,
    position:'relative',
    marginBottom:20,
    alignItems:"center",
    justifyContent: 'center',
    width:150,
    height:170,
  },
  icon:{
    fontSize:34,
    color:'red',
    marginTop:30,
  },
  bottomButtons:{
    flexDirection:'row',
    height:68,
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopWidth:2,
    // borderTopColor:'#ddd',
    elevation: 2,
  },
  textContainer:{
    flex:0.46,
    borderWidth:2,
    borderColor:'#ddd',
    paddingVertical:12,
    marginHorizontal:1.8,
    padding:10,
  },
  text:{
    fontSize:13,
    fontFamily:'OpenSans-ExtraBold',
    textTransform: 'uppercase',
    textAlign:'center',
  },
})
