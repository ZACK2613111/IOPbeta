import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Weatherbar from './Components/Weatherbar';
import Donutchart from './Components/Donutchart';
import MainContainer from './src/app/components/MainContainer';
export default function App() {

  let [fontsLoaded] = useFonts({
    'CircularStd-Bold': require('./assets/fonts/CircularStdBold.ttf'),
    'CircularStd-Book': require('./assets/fonts/CircularStdBook.ttf'),
    'CircularStd-Medium': require('./assets/fonts/CircularStdMedium.ttf'),
  });
  return (
    <MainContainer/>
  );
}


