import {View, StyleSheet, Image, Text, ScrollView, TouchableOpacity} from "react-native";
import React from "react";



export default function MyPlants() {
  return (
    // Header
    // Serach bar

    <View>
      <Text>myPlants</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View >
          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
           <Image source = {require='../../assets/myPlants/plants/plant1.png'}></Image>          
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            {/* <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            /> */}
           <Image source = {require='../../assets/myPlants/plants/plant1.png'}></Image>          
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.plantContainer]}
            onLongPress={() => {
              console.log("Selected");
            }}
            delayLongPress={3000}
          >
            <Image
              style={{}}
              source={require="../assets/myPlants/plants/plant1.png"}
              resizeMode="contain"
            />
            <Text>Lorem Ipsum</Text>
            <Text>Jasmine</Text>
            <Text>Bon état</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginTop: 60,
    marginRight: 30,
    marginLeft: 30,
  },
  plantContainer: {
    justifyContent: "center",
    alignContent: "center",
    margin: 5,
    marginBottom: 55,
    borderRadius: 40,
  },
  scroll:{justifyContent:'center', alignContent:'center'},
});
