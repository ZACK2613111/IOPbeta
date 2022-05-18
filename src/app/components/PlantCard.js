import {Image, Pressable, Text, View} from "react-native";
import COLORS from "../../data/colors";
import {useState} from "react";

import CheckBox from "./CheckBox";
export default function PlantCard({
  name,
  img,
  etat,
  display,
  id,
  setPlantToDelete,
  plantToDelete,
}) {
  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    const plants = [...plantToDelete];
    if (check) {
      setCheck(false);
      const index = plants.indexOf((item) => item === id);
      plants.splice(index, 1);
      setPlantToDelete(plants);
    } else {
      setCheck(true);
      plants.push(id);
      setPlantToDelete(plants);
    }
  };
  return (
    <View
      style={{
        width: "48%",
        position: "relative",
        borderColor: COLORS.GRAY,
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 10,
        marginHorizontal: "1%",
        overflow: "hidden",
      }}
    >
      <Pressable
        android_ripple={{color: "#000"}}
        style={{
          alignItems: "center",
          backgroundColor: "white",
          padding: 5,
        }}
      >
        <Image
          resizeMode="contain"
          style={{width: "100%", height: 100}}
          source={{
            uri: img,
          }}
        />
        <Text style={{color: COLORS.GREEN, fontWeight: "bold", fontSize: 16}}>
          {name}
        </Text>
        <Text style={{color: COLORS.GRAY, fontWeight: "600"}}>{etat}</Text>
        {display && (
          <View
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              height: 25,
              width: 25,
            }}
          >
            <CheckBox
              onPress={() => checkHandler()}
              title="Check"
              isChecked={check}
            ></CheckBox>
          </View>
        )}
      </Pressable>
    </View>
  );
}
