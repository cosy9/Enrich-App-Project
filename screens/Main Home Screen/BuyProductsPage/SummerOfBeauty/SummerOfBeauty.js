import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import summerOfBeautyData from '../../../../assets/data/summerOfBeautyData'
import SummerOfBeautyItem from './SummerOfBeautyItem'

const SummerOfBeauty = () => {
  return (
    <View style={styles.container}>
    <View style={styles.TopView}>  
      <Text style={styles.TopText}>Summer Of Beauty</Text>
    </View>
    <View style={styles.FlexItemWrap}>
    {summerOfBeautyData.map((item)=>{
      return <SummerOfBeautyItem
                key={item.id} item={item}
            />
    })}
    </View>
  </View>
  )
}

export default SummerOfBeauty

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:18,
    marginBottom:2,
    backgroundColor:'#fff',
  },
  TopView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  TopText:{
    marginLeft:22,
    fontSize:19,
    marginBottom:12,
    fontWeight: 'bold',
    textTransform:'capitalize',
  },
  FlexItemWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
