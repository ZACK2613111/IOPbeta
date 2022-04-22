
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "./src/app/screens/Home";
import Loading from "./src/app/screens/Loading";
import myPlants from "./src/app/screens/myPlants";


//Stack

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null}}>
        {/* <Stack.Screen name="Loading" component={Loading}/>
        <Stack.Screen name="Home" component={Home}/> */}
        <Stack.Screen name="myPlants" component={myPlants}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

