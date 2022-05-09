import {Image, Pressable, Text, View} from "react-native";
import COLORS from "../../data/colors";

export default function PlantCard({name, img, etat, deleteHandler, id}) {
  return (
    <View
      style={{
        width: "48%",
        borderColor: COLORS.GRAY,
        borderRadius: 20,
        borderWidth: 2,
        marginBottom: 10,
        marginHorizontal: "1%",
        overflow: "hidden",
        elevation: 10,
      }}
    >
      <Pressable
        onLongPress={() => deleteHandler(id)}
        android_ripple={{color: "#000"}}
        style={{
          alignItems: "center",
          backgroundColor: "white",
          padding: 5,
        }}
      >
        <Image source={img} />
        <Text style={{color: COLORS.GREEN, fontWeight: "bold", fontSize: 16}}>
          {name}
        </Text>
        <Text style={{fontWeight: "bold", color: "black"}}>Jasmine</Text>
        <Text style={{color: COLORS.GRAY, fontWeight: "600"}}>{etat}</Text>
        <View style={{}}></View>
      </Pressable>
    </View>
  );
}
