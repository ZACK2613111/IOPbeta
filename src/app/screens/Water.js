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
import WaterCard from "../components/WaterCard";

export default function Water({plants, navigation}) {
  const [value, setValue] = useState("");
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View
        style={{
          height: (75 * Dimensions.get("screen").height) / 100,
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderColor: "#00000025",
              borderWidth: 2,
              borderRadius: 20,
              margin: 5,
              width: "80%",
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
        <FlatList
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          data={plants}
          renderItem={({item, index}) => (
            <WaterCard
              name={item.displayName}
              img={item.picture}
              etat={"Bon état"}
              id={item.id}
              display={displayDelete}
            />
          )}
          style={{
            width: "100%",
            marginTop: 5,
            height: (70 * Dimensions.get("window").height) / 100,
          }}
        />
      </View>
    </View>
  );
}
