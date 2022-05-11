import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native'
import { collection, where, getDocs, onSnapshot } from "firebase/firestore";

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { auth, db } from "../../core/firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

//Screens 
import DashBoard from '../screens/dashBoard'
import Screen2 from '../screens/Screen2'
import MyPlants from '../screens/myPlants'


const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const [user, setUser] = useState(null);
    const [plants, setPlants] = useState([]);
    const [infos, setInfos] = useState({});
    const getInfos = async (currentUser) => {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setInfos(docSnap.data());
            getPlants(docSnap.data().idRaspBerry);

        } else {
            console.log("doesnt existe")
        }
    }
    const getPlants = async (idRaspBerry) => {
        const plants = [];
        const querySnapshot = await getDocs(collection(db, "raspberries", idRaspBerry, "data"));
        querySnapshot.forEach((doc) => { plants.push({ id: doc.id, ...doc.data() }); console.log(doc.data().displayName) });
        setPlants(plants);
    }
    useEffect(() => {
        if (infos.idRaspBerry) {
            const q = collection(db, "raspberries", infos.idRaspBerry, "data");

            const unsub = onSnapshot(q, (querySnapshot) => {
                const plants = [];
                querySnapshot.forEach((doc) => {
                    plants.push({ id: doc.id, ...doc.data() });
                })
                setPlants(plants);
            })
            return () => unsub();
        }
    }, [infos.idRaspBerry])
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                getInfos(currentUser);
            } else {
                navigation.replace("Login")
            }
        })
    }, [])
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: { height: 80, borderTopLeftRadius: 10, borderTopRightRadius: 10, backgroundColor: '#0c0c0c', opacity: 0.6 }
            }}>


            <Tab.Screen name={'Screen1'} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image source={require('../../assets/dashboard.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#FFFFFF', marginTop: 17 }} />
                        <Text style={{ color: focused ? '#07D779' : '#FFFFFF', fontSize: 12, paddingTop: 4 }}>DashBoard</Text>
                        <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#00FF0000', marginTop: 'auto' }} />
                    </View>
                )
            }} >
                {props => <DashBoard {...props} user={user} infos={infos} />}
            </Tab.Screen>
            <Tab.Screen name={'Screen2'} component={Screen2} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image source={require('../../assets/drop.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#FFFFFF', marginTop: 17 }} />
                        <Text style={{ color: focused ? '#07D779' : '#FFFFFF', fontSize: 12, paddingTop: 4 }}>Water</Text>
                        <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#00FF0000', marginTop: 'auto' }} />
                    </View>
                )
            }} />
            <Tab.Screen name={'My Plants'} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Image source={require('../../assets/plant.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#FFFFFF', marginTop: 17 }} />
                        <Text style={{ color: focused ? '#07D779' : '#FFFFFF', fontSize: 12, paddingTop: 4 }}>My Plants</Text>
                        <Image source={require('../../assets/Ellipse.png')} resizeMode='contain' style={{ tintColor: focused ? '#07D779' : '#00FF0000', marginTop: 'auto' }} />
                    </View>
                )
            }} >
                {props => <MyPlants {...props} plants={plants} />}
            </Tab.Screen>

        </Tab.Navigator>

    )
}
