import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Onboard from './components/Onboard'
import * as Font from 'expo-font'

const Stack = createNativeStackNavigator();

export default function App() {
  const [showOnboard,setShowOnboard] = useState(true);
    useEffect(() => {
      Font.loadAsync({
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-Medium': require('./assets/fonts/OpenSans-Medium.ttf'),
        'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
        'OpenSans-ExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
        'OpenSans-ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        'OpenSans-MediumItalic': require('./assets/fonts/OpenSans-MediumItalic.ttf'),
        'ZenAntiqueSoft-Regular': require('./assets/fonts/ZenAntiqueSoft-Regular.ttf'),
        'LibreBaskerville-Bold': require('./assets/fonts/LibreBaskerville-Bold.ttf'),
      })
    }, [])
    


  console.log(showOnboard);
  const onDone = ()=>{
    setShowOnboard(false)
  }
  const goBack = ()=>{
    setShowOnboard(true)
  }
  return (
  <>
    {showOnboard && <Onboard onDone={onDone} />}
    {!showOnboard && <Home goBack={goBack} />}
  </>
  )
}


