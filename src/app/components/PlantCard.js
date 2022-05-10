import { Image, Pressable, Text, View } from "react-native";
import COLORS from "../../data/colors";

export default function PlantCard({ name, img, etat }) {
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
        // elevation: 10,
      }}
    >
      <Pressable
        android_ripple={{ color: "#000" }}
        style={{
          alignItems: "center",
          backgroundColor: "white",
          padding: 5,
          width: "100%"
        }}
      >
        <Image resizeMode="contain" style={{ width: "100%", height: 100 }} source={{
          uri: img,
        }} />
        <Text style={{ color: COLORS.GREEN, fontWeight: "bold", fontSize: 14 }}>
          {name}
        </Text>
        <Text style={{ color: COLORS.GRAY, fontWeight: "600" }}>{etat}</Text>
      </Pressable>
    </View>
  );
}
