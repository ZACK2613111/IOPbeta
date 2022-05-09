import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Icon,
  TextInput,
  Pressable,
} from "react-native";

import data from "../../data/plants";
import COLORS from "../../data/colors";
import {useState} from "react";
import PlantCard from "../components/PlantCard";
import Header from "../components/header";
import FloatingActionButton from "../components/FloatingActionButton";

export default function MyPlants() {
  const [value, setValue] = useState("");
  const [plants, setPlants] = useState(data);
  const sortedFilteredPlants = () => {
    let sortedPlant = plants;
    sortedPlant.sort((a, b) =>
      b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase() ? -1 : 1
    );
    sortedPlant = sortedPlant.filter((item) =>
      item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    return sortedPlant;
  };
  const deleteHandler = (id) => {
    const index = sortedFilteredPlants().findIndex((item) => item.id === id);
    const newData = [...plants];
    newData.splice(index, 1);
    setPlants(newData);
  };
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
      }}
    >
      <Header
        style={{
          height: (20 * Dimensions.get("screen").height) / 100,
          width: "100%",
        }}
      />

      <View
        style={{
          height: (80 * Dimensions.get("screen").height) / 100,
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
              borderWidth: 1,
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
        <View style={{marginTop: 10, flex: 1, alignItems: "center"}}>
          {/* Il faut faire le cas ou il reste juste un element dans la liste */}
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={sortedFilteredPlants()}
            renderItem={({item, index}) => (
              <PlantCard
                name={item.name}
                img={item.img}
                etat={"Bon état"}
                deleteHandler={deleteHandler}
                id={item.id}
              />
            )}
          />
          <FloatingActionButton />
        </View>
      </View>
    </View>
  );
}
