import {Image, Pressable, Text, View, Dimensions} from "react-native";
import COLORS from "../../data/colors";
import {useState} from "react";

import CheckBoxsquare from "./Checkboxsquare";
export default function WaterCard({name, img, etat, humidity, display, id}) {
  const [check, setCheck] = useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        width: "90%",
        height: (10 * Dimensions.get("window").height) / 100,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: "#00000015",
        justifyContent: "space-around",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 5,
      }}
    >
      <Image
        style={{height: "80%", width: "20%", overflow: "hidden"}}
        resizeMode="contain"
        source={{
          uri: img,
        }}
      />
      <View>
        <Text style={{color: COLORS.GREEN, fontWeight: "bold", fontSize: 16}}>
          {name}
        </Text>
        <Text>{etat}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Image
          source={require("../../assets/Humidity.png")}
          resizeMode={"contain"}
          style={{height: 30, width: 20}}
        />
        <Text style={{fontSize: 18, fontWeight: "500", color: COLORS.GRAY}}>
          20%
        </Text>
      </View>
      <CheckBoxsquare></CheckBoxsquare>
    </View>
  );
}
