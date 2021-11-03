import React from 'react'
import { Image, Text as NativeText ,StyleSheet,View, ImageBackground, ImageBackgroundBase } from 'react-native'
import Svg, { G, Text, TextPath, TSpan, Circle } from 'react-native-svg'
import { Table, TableWrapper, Row, Rows} from 'react-native-table-component'

const TopImage = () => {
  const CONTENT = {
    tableHead: ['You Pay', 'We Add', 'You Get'],
    tableData: [['₹1,00,000','₹65,000','₹1,65,000']],
  };
  return (
    <ImageBackground style={styles.imageBg} source={require('../../../../../../assets/Images/OfferImages/ladyBg.png')}>
    <View style={styles.container}>
      <Svg position="absolute" height="200" width="200" viewBox="0 50 300 300">
    <G id="circle">
      <Circle r={75} x={150} y={150}
        fill="none" stroke="#FBFBFB" strokeWidth={14}
        transform="rotate(+90)"
      />
    </G>
    <Text fill="#000" fontSize="20.4" 
    fontWeight='900'
    >
      <TextPath href="#circle" startOffset="50%">
        <TSpan dx="0" dy={-2} textAnchor="middle">
          Get even more with
        </TSpan>
      </TextPath>
    </Text>
  </Svg>
  <Image style={styles.image} source={require('../../../../../../assets/Images/OfferImages/iconBadge.png')}/>
  <NativeText style={styles.discount}>Get <NativeText style={styles.highlight}>65%</NativeText> benefits</NativeText>

  <Table borderStyle={{ borderWidth: 1 ,borderColor:'#2f2f2f' }}>
        <Row
          data={CONTENT.tableHead}
          style={styles.head}
          textStyle={[styles.text,{fontWeight:'bold'}]}
        />
        <TableWrapper style={styles.wrapper}>
          <Rows
            data={CONTENT.tableData}
            flexArr={[1, 1, 1]}
            style={styles.row}
            textStyle={[styles.text,{color:'#ef4056',fontFamily:'OpenSans-ExtraBold'}]}
          />
        </TableWrapper>
      </Table>
      <NativeText style={styles.validity}>Validity <NativeText style={styles.highlight2}>12 months</NativeText> from date of purchase</NativeText>
  </View>
  </ImageBackground>
  )
}

export default TopImage

const styles = StyleSheet.create({
  imageBg:{
    width:'100%',
    height:240,
    marginTop:14,
  },
  container:{
    width:'67%',
    marginTop:18,
    marginLeft:10,
    alignItems:'center',
    backgroundColor:'#FBFBFB',
    // backgroundColor:'red',
  },
  image:{
    width:86,
    height:86,
    marginTop:16,
  },
  discount:{
    fontSize:16,
    marginTop:3,
    marginBottom:9,
    // backgroundColor:'red',
  },
  highlight:{
    color:'#ef4056',
    fontWeight:'bold',
  },
  validity:{
    fontSize:11.7,
    fontFamily:'OpenSans-Bold',
    marginTop:8,
  },
  highlight2:{
    fontSize:11.7,
    fontFamily:'OpenSans-Bold',
    color:'#ef4056',
  },
  head: { 
    width:250,
    height: 22,
    backgroundColor: '#FBFBFB' 
  },
  wrapper: {flexDirection: 'row'},
  title: { 
    flex: 1,
    backgroundColor: '#2ecc71'
  },
  row: {
    height: 28 
},
  text: {
    textAlign: 'center' 
  },
})
