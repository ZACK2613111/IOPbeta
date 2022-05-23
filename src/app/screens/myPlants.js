import {
  View,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";

import COLORS from "../../data/colors";
import {useEffect, useState} from "react";
import PlantCard from "../components/PlantCard";
import FloatingActionButton from "../components/FloatingActionButton";
import CheckBox from "../components/CheckBox";

export default function MyPlants({plants, navigation, idRaspBerry, index}) {
  const [displayDelete, setDisplayDelete] = useState(false);
  const [value, setValue] = useState("");
  const [plantToDelete, setPlantToDelete] = useState([]);
  useEffect(() => {
    console.log(plants);
  }, []);
  useEffect(() => {
    console.log(plantToDelete);
  }, [plantToDelete]);
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View
        style={{
          height: (75 * Dimensions.get("screen").height) / 100,
          width: "80%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#00000025",
              borderWidth: 2,
              borderRadius: 20,
              flex: 1,
              marginRight: 5,
            }}
          >
            <Image
              source={require("../../assets/myPlants/search.png")}
              style={{height: 40, width: 40}}
              resizeMode={"contain"}
            />
            <TextInput
              placeholder="Search"
              value={value}
              onChangeText={setValue}
              style={{flex: 1}}
            />
          </View>
          <Pressable
            android_ripple={{
              color: "#00000025",
            }}
          >
            <Image source={require("../../assets/myPlants/sliders.png")} />
          </Pressable>
        </View>
        <View style={{marginTop: 10, flex: 1, width: "100%"}}>
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={plants}
            renderItem={({item, index}) => (
              <PlantCard
                name={item.displayName}
                img={item.picture}
                etat={"Bon état"}
                id={item.id}
                display={displayDelete}
                setPlantToDelete={setPlantToDelete}
                plantToDelete={plantToDelete}
              />
            )}
          />
        </View>
      </View>
      <FloatingActionButton
        idRaspBerry={idRaspBerry}
        index={index}
        setDisplayDelete={setDisplayDelete}
        navigation={navigation}
      ></FloatingActionButton>
    </View>
  );
}
