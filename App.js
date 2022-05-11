import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import MainContainer from './src/app/components/MainContainer'
import Addplant from './src/app/screens/Addplant';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/app/screens/login';
import RegisterScreen from './src/app/screens/register';
const Stack = createNativeStackNavigator();
export default function App() {

  let [fontsLoaded] = useFonts({
    'CircularStd-Bold': require('./src/assets/fonts/CircularStdBold.ttf'),
    'CircularStd-Book': require('./src/assets/fonts/CircularStdBook.ttf'),
    'CircularStd-Medium': require('./src/assets/fonts/CircularStdMedium.ttf'),
  });
  return (
    // <MainContainer />


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Main' component={MainContainer} />
        <Stack.Screen name='Addplant' component={Addplant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

