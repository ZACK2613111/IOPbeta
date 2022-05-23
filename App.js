import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useFonts} from "expo-font";
import MainContainer from "./src/app/components/MainContainer";
import Addplant from "./src/app/screens/Addplant";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createStackNavigator} from "react-navigation-stack";
import LoginScreen from "./src/app/screens/login";
import RegisterScreen from "./src/app/screens/register";
import GraphCard from "./src/app/screens/Graphs";
import QRcodeScanner from "./src/app/screens/QRcodeScanner";
import FaillureQR from "./src/app/screens/faillureQRScreen";
import SuccessQR from "./src/app/screens/successQRScreen";
import Onboarding from "./src/app/screens/Onboarding";

import {auth} from "./src/core/firebase";
import {signOut} from "firebase/auth";
import OnboardingData from "./src/data/OnboardingData";
const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "CircularStd-Bold": require("./src/assets/fonts/CircularStdBold.ttf"),
    "CircularStd-Book": require("./src/assets/fonts/CircularStdBook.ttf"),
    "CircularStd-Medium": require("./src/assets/fonts/CircularStdMedium.ttf"),
  });
  if (!fontsLoaded) {
    <View></View>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="QRcodeScanner" component={QRcodeScanner} />
        <Stack.Screen
          name="Addplant"
          component={Addplant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Graphic" component={GraphCard} />
        <Stack.Screen name="faillureQR" component={FaillureQR} />
        <Stack.Screen name="successQR" component={SuccessQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
