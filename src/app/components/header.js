import { View, Text } from 'react-native'
import React from 'react'

export default function header() {
  return (
    <View style={{justifyContent:'space-between', width:308.07, height:31.5}}>
        <Image source={require("../../assets/myPlants/menu.png")} style={{width:31.25, height:31.5}}/>
        <Image source={require("../../assets/myPlants/logo.png")} style={{width:24.32, height:30}}/>
        <Image/>
      </View>
  )
}
