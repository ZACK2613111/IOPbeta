import { Image, Pressable, Text, View } from "react-native";
import COLORS from "../../data/colors";
import { useState, useEffect } from "react";

import CheckBoxW from "./CheckBoxW";
export default function PlantCardWatering({
  plant,
  // display,
  id,
  setPlantToIrregate,
  plantToIrregate,
}) {

  const [check, setCheck] = useState(false);
  const checkHandler = () => {
    const plants = [...plantToIrregate];
    if (check) {
      setCheck(false);
      const index = plants.indexOf((item) => item === id);
      plants.splice(index, 1);
      setPlantToIrregate(plants);
    } else {
      setCheck(true);
      plants.push(id);
      setPlantToIrregate(plants);
    }
  };
  return (
    <View
      style={{
        marginVertical: 7,
        alignSelf: 'center',
        backgroundColor: "white",
        width: '88%',
        shadowColor: '#000000',
        elevation: 5,
        borderRadius: 20,
        overflow: 'hidden',

      }}
    >
      <Pressable
        android_ripple={{ color: "#000" }}
        style={{
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          backgroundColor: "white",
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 10

        }}
      >

        <Image
          resizeMode="contain"
          style={{ height: 50, width: 50, marginRight: 10, borderRadius: 10 }}
          source={plant.picture ? {
            uri: plant.picture,
          } : require("../../assets/Group.png")}
        />
        <View style={{ flex: 1, left: '20%' }}>
          <Text style={{
            color: COLORS.GREEN, fontFamily: 'CircularStd-Bold', fontSize: 17
          }}>
            {plant.displayName}
          </Text>
          <Text style={{ color: COLORS.GRAY, fontFamily: 'CircularStd-Medium', }}>{plant.specie}</Text>
        </View>

        <Image
          resizeMode="contain"
          style={{ height: '40%', flex: 0.3 }}
          source={require('../../assets/images/moisture.png')}
        />
        <Text
          style={{ fontFamily: 'CircularStd-Bold', flex: 0.7, color: '#00000075', fontSize: 18 }}

        >{plant.valeursActuelles.soilMoisture}%</Text>
        <View style={{ flex: 0.5, left: '20%' }}>
          {/* {
            display && ( */}
          <View>
            <CheckBoxW
              onPress={() => checkHandler()}
              title="Check"
              isChecked={check}
            ></CheckBoxW>
          </View>
          {/* )
          } */}
        </View>
      </Pressable >
    </View >
  );
}
