import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import EnIcon from 'react-native-vector-icons/Entypo';

const FlatListItem = ({item}) => {
  const [readMore, setReadMore] = useState(false);
  // console.log(readMore);
  const {ratings,icon,title,text,name,date} = item
  return (
    <View style={styles.container}>
      <View style={styles.star}>
        <View style={styles.left}>
          <Text style={styles.rating}>{ratings}</Text>
          <EnIcon style={styles.icon} name={icon}/>
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.text}>{readMore ? text : `${text.substring(0,150)}...`}
          <Text style={{fontWeight:'bold'}} onPress={() => setReadMore(!readMore)}>
            {readMore ?  'show less' : 'read more'}
          </Text>
      </Text>
      <View style={styles.rowName}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.line}></View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.bottomLine}></View>
    </View>
  )
}

export default FlatListItem

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginVertical:14,
  },
  star:{
    flexDirection:'row',
    alignItems: 'center',
  },
  left:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#19af77',
    paddingHorizontal:4,
    borderRadius:10,
  },
  rating:{
    color:'#fff',
    fontSize:12,
    marginRight:5,
  },
  icon:{
    color:'#fff',
    fontSize:11,
  },
  title:{
    fontFamily:'OpenSans-Bold',
    marginLeft:5,
  },
  text:{
    fontFamily:'OpenSans-Medium',
    fontSize:12,
    lineHeight:19,
  },
  rowName:{
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  name:{
    color:'#a5a5a5',
    fontSize:12,
    marginRight:5,
  },
  date:{
    color:'#a5a5a5',
    fontSize:12,
    marginLeft:5,
  },
  line:{
    width:0.6,
    height:'100%',
    backgroundColor:'#a5a5a5',
  },
  bottomLine:{
    width:'100%',
    height:1,
    backgroundColor:'#a5a5a5',
    marginTop:15,
  }
})
