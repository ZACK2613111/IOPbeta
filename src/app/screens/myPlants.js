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



import COLORS from "../../data/colors"
import { useEffect, useState } from "react";
import PlantCard from "../components/PlantCard";
import Header from "../components/header"

export default function MyPlants({ plants }) {
  const [value, setValue] = useState("");
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

        </Box>
      </Center>

    );
  };

  return (
    <View
      style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}
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
              style={{ height: 40, width: 40 }}
              resizeMode={"contain"}
            />
            <TextInput
              placeholder="Search"
              value={value}
              onChangeText={setValue}
              style={{ flex: 1 }}
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
        <View style={{ marginTop: 10, flex: 1, width: "100%" }}>
          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={plants}
            renderItem={({ item, index }) => (
              <PlantCard
                name={item.displayName}
                img={item.picture}
                etat={"Bon état"}
                id={item.id}
              />
            )}
          />
        </View>
      </View>

    </View>
  );
}
