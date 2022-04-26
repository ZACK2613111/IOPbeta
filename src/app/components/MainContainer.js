import * as React from 'react'
import { View,Text,Image } from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



//Screens 
import dashBoard from '../screens/dashBoard'
import Screen2 from '../screens/Screen2'
import MyPlants from '../screens/myPlants'


const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer >
            <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle:{height:80,borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:'#0c0c0c',opacity:0.6}
            }}>
        
        
        <Tab.Screen name={'Screen1'} component={dashBoard} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Image source={require('../../assets/dashboard.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#FFFFFF',marginTop:17}}/>
                    <Text style={{color : focused ? '#07D779' : '#FFFFFF', fontSize : 12,paddingTop:4}}>DashBoard</Text>
                    <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#00FF0000',marginTop:'auto'}}/>
                </View>
            )
        }}/>
        <Tab.Screen name={'Screen2'} component={Screen2} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Image source={require('../../assets/drop.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#FFFFFF',marginTop:17}}/>
                    <Text style={{color : focused ? '#07D779' : '#FFFFFF', fontSize : 12,paddingTop:4}}>Water</Text>
                    <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#00FF0000',marginTop:'auto'}}/>
                </View>
            )
        }}/>
        <Tab.Screen name={'My Plants'} component={MyPlants} options={{
            tabBarIcon:({focused}) => (
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                    <Image source={require('../../assets/plant.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#FFFFFF',marginTop:17}}/>
                    <Text style={{color : focused ? '#07D779' : '#FFFFFF', fontSize : 12, paddingTop:4}}>My Plants</Text>
                    <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{tintColor : focused ? '#07D779' : '#00FF0000',marginTop:'auto'}}/>
                </View>
            )
        }}/>

      </Tab.Navigator>

        </NavigationContainer>
    )
}
