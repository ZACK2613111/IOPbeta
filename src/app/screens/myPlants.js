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
import COLORS from "../../data/colors"
import {useState} from "react";
import PlantCard from "../components/PlantCard";

export default function MyPlants() {
  const [value, setValue] = useState("");
  const [plants, setPlants] = useState(data);
  const Example = () => {
    return (
      <Center>
        <Box
          height="200"
          w="400"
          shadow="2"
          rounded="lg"
          _dark={{
            bg: "coolGray.200:alpha.20",
          }}
          _light={{
            bg: "coolGray.200:alpha.20",
          }}
        >
          <Fab
            renderInPortal={false}
            shadow={2}
            placement="top-right"
            size="sm"
            icon={
              <Icon
                color="white"
                as={MaterialIcons}
                name="lightbulb"
                size="4"
              />
            }
            label="Quick Start"
          />
        </Box>
      </Center>
    );
  };
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
      style={{alignItems: "center", backgroundColor: "white", height: "100%"}}
    >
      <View
        style={{
          height: (10 * Dimensions.get("screen").height) / 100,
          backgroundColor: "red",
          width: "100%",
        }}
      ></View>
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
        <View style={{marginTop: 10, flex: 1, alignItems: "center"}}>
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
        </View>
      </View>
      <View
        style={{
          height: (15 * Dimensions.get("screen").height) / 100,
          backgroundColor: "green",
          width: "100%",
        }}
      ></View>
    </View>
  );
}
