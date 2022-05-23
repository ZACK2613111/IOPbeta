import React from "react";
import {useState, useCallback} from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Pressable,
  Picker,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import {db} from "../../core/firebase";
import {ref, set, deleteDoc} from "firebase/database";
import {ScrollView} from "react-native-gesture-handler";
import COLORS from "../../data/colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const navigateHelp = () => {
  navigation.navigate("Help");
};

const data_Pin = [
  {label: "DATA_PIN_A0", value: "A0"},
  {label: "DATA_PIN_A1", value: "A1"},
  {label: "DATA_PIN_A2", value: "A2"},
  {label: "DATA_PIN_A3", value: "A3"},
  {label: "DATA_PIN_A4", value: "A4"},
  {label: "DATA_PIN_A5", value: "A5"},
  {label: "DATA_PIN_A6", value: "A6"},
];

const power_pin = [
  {label: "POWER_PIN_0", value: "0"},
  {label: "POWER_PIN_1", value: "1"},
  {label: "POWER_PIN_2", value: "2"},
  {label: "POWER_PIN_3", value: "3"},
  {label: "POWER_PIN_4", value: "4"},
  {label: "POWER_PIN_5", value: "5"},
  {label: "POWER_PIN_6", value: "6"},
  {label: "POWER_PIN_7", value: "7"},
  {label: "POWER_PIN_8", value: "8"},
  {label: "POWER_PIN_9", value: "9"},
];

const data_DHT = [
  {label: "DATA_0", value: "0"},
  {label: "DATA_1", value: "1"},
  {label: "DATA_2", value: "2"},
  {label: "DATA_3", value: "3"},
  {label: "DATA_4", value: "4"},
  {label: "DATA_5", value: "5"},
  {label: "DATA_6", value: "6"},
  {label: "DATA_7", value: "7"},
  {label: "DATA_8", value: "8"},
  {label: "DATA_9", value: "9"},
];

const power_DHT = [
  {label: "POWER_0", value: "0"},
  {label: "POWER_1", value: "1"},
  {label: "POWER_2", value: "2"},
  {label: "POWER_3", value: "3"},
  {label: "POWER_4", value: "4"},
  {label: "POWER_5", value: "5"},
  {label: "POWER_6", value: "6"},
  {label: "POWER_7", value: "7"},
  {label: "POWER_8", value: "8"},
  {label: "POWER_9", value: "9"},
];

const vanne_DHT = [
  {label: "VANNE_0", value: "0"},
  {label: "VANNE_1", value: "1"},
  {label: "VANNE_2", value: "2"},
  {label: "VANNE_3", value: "3"},
  {label: "VANNE_4", value: "4"},
  {label: "VANNE_5", value: "5"},
  {label: "VANNE_6", value: "6"},
  {label: "VANNE_7", value: "7"},
  {label: "VANNE_8", value: "8"},
  {label: "VANNE_9", value: "9"},
];

export default function AddPlant({navigation, route}) {
  const navigateHelp = () => {
    navigation.navigate("Help");
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const {index, idRaspBerry} = route.params;

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 1],
      quality: 1,
    });

    if (pickerResult.cancelled === true) {
      return;
    }
    if (!pickerResult.cancelled) {
      setSelectedImage(pickerResult.uri);
    }
  };
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const onFitemOpen = useCallback(() => {
    setOpen1(false);
  }, []);

  const onSitemOpen = useCallback(() => {
    setOpen(false);
  }, []);

  const AddPlant = async (data) => {
    try {
      await set(ref(db, "raspberries/" + idRaspBerry + "/data/" + index), data);
    } catch (e) {
      console.log(e);
    }
  };

  const confirmHandler = () => {
    const data = {
      controller: value,
      displayName: text,
      humidity: [],
      moisture: [],
      picture: "",
      specie: text1,
      temperature: [],
      id: new Date().getTime(),
    };
    AddPlant(data);
    navigation.goBack();
  };
  return (
    <ScrollView style={{height: "100%", width: "100%"}}>
      <View
        style={{justifyContent: "center", alignItems: "center", marginTop: 20}}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E3E3E3",
            borderRadius: 50,
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={openImagePickerAsync}
        >
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={{borderRadius: 50, width: 100, height: 100}}
              resizeMode="contain"
            />
          ) : (
            <Image source={require("../../assets/Group.png")} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.GREEN,
            position: "absolute",
            bottom: "10%",
            right: "38%",
            borderRadius: 50,
            width: 25,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={openImagePickerAsync}
        >
          <Image source={require("../../assets/select.png")}></Image>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            margin: 5,
            marginLeft: (windowWidth * 5) / 100,
          }}
        >
          General
        </Text>
        <View>
          <Text style={styles.title}>NAME</Text>
          <TextInput
            onChangeText={(text) => setText(text.trimStart())}
            value={text}
            style={{
              height: 50,
              width: (windowWidth * 90) / 100,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              backgroundColor: "white",
              borderRadius: 10,
              marginTop: 3,
              margin: (windowWidth * 5) / 100,
              paddingHorizontal: 15,
            }}
            maxLength={15}
            underlineColorAndroid="White"
            listMode="SCROLLVIEW"
            autoCapitalize={true}
            placeholder="Enter your name"
            placeholderTextColor={"#00000070"}
            multiline={false}
            textAlign="left"
            textBreakStrategy="highQuality"
          />
        </View>
        <View>
          <Text style={styles.title}>SPECIE</Text>
          <TextInput
            onChangeText={(text1) => setText1(text1.trimStart())}
            value={text1}
            style={{
              height: 50,
              width: (windowWidth * 90) / 100,
              borderWidth: 1,
              backgroundColor: "white",
              borderColor: "#E3E3E3",
              borderRadius: 10,
              marginTop: 3,
              margin: (windowWidth * 5) / 100,
              paddingHorizontal: 15,
            }}
            underlineColorAndroid="transparent"
            autoCapitalize={true}
            placeholder="Enter your specie"
            placeholderTextColor={"#00000090"}
            listMode="SCROLLVIEW"
            multiline={false}
            textAlign="left"
            textBreakStrategy="highQuality"
            maxLength={30}
          />
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            margin: 5,
            marginLeft: (windowWidth * 5) / 100,
          }}
        >
          Soil Moisture
        </Text>
        <View style={{}}>
          <Text style={styles.title}>POWER_PIN</Text>
          <DropDownPicker
            style={{
              marginTop: 3,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
            }}
            open={open}
            onOpen={onFitemOpen}
            placeholder="Select your POWER_PIN"
            dropDownContainerStyle={{
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              maxHeight: (windowHeight * 13.1) / 100,
              marginTop: 0,
              borderColor: "#E3E3E3",
              paddingBottom: 5,
            }}
            listMode="SCROLLVIEW"
            value={value}
            items={power_pin}
            setOpen={setOpen}
            setValue={setValue}
            zIndex={10000}
          />
        </View>

        <View style={{}}>
          <Text style={styles.title}>DATA_PIN</Text>
          <DropDownPicker
            style={{
              marginTop: 10,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
            }}
            dropDownContainerStyle={{
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              maxHeight: (windowHeight * 10) / 100,
              marginTop: 0,
              borderColor: "#E3E3E3",
            }}
            scrollViewProps={{
              decelerationRate: "fast",
            }}
            modalContentContainerStyle={{
              backgroundColor: "#f80000",
            }}
            dropDownDirection="BOTTOM"
            listMode="SCROLLVIEW"
            onOpen={onSitemOpen}
            placeholder="Select your DATA_PIN"
            open={open1}
            value={value1}
            items={data_Pin}
            setOpen={setOpen1}
            setValue={setValue1}
          />
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            margin: 5,
            marginLeft: (windowWidth * 5) / 100,
          }}
        >
          DHT
        </Text>
        <View style={{}}>
          <Text style={styles.title}>DATA</Text>
          <DropDownPicker
            style={{
              marginTop: 3,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
            }}
            listMode="SCROLLVIEW"
            open={open2}
            // onOpen={onFitemOpen}
            placeholder="Select your DATA"
            dropDownContainerStyle={{
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              maxHeight: (windowHeight * 14) / 100,
              marginTop: 0,
              borderColor: "#E3E3E3",
            }}
            value={value2}
            items={data_DHT}
            setOpen={setOpen2}
            setValue={setValue2}
          />
        </View>

        <View style={{}}>
          <Text style={styles.title}>POWER</Text>
          <DropDownPicker
            style={{
              marginTop: 10,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
            }}
            dropDownContainerStyle={{
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              maxHeight: (windowHeight * 14) / 100,
              marginTop: 0,
              borderColor: "#E3E3E3",
              paddingBottom: 5,
            }}
            listMode="SCROLLVIEW"
            dropDownDirection="BOTTOM"
            placeholder="Select your POWER"
            open={open3}
            value={value3}
            items={power_DHT}
            setOpen={setOpen3}
            setValue={setValue3}
            zIndex={2000}
          />
        </View>

        <View style={{}}>
          <Text style={styles.title}>VANNE</Text>
          <DropDownPicker
            style={{
              marginTop: 10,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
            }}
            dropDownContainerStyle={{
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              maxHeight: (windowHeight * 10) / 100,
              marginTop: 0,
              borderColor: "#E3E3E3",
            }}
            scrollViewProps={{
              decelerationRate: "fast",
            }}
            modalContentContainerStyle={{
              backgroundColor: "#f80000",
            }}
            listMode="SCROLLVIEW"
            dropDownDirection="BOTTOM"
            onOpen={onSitemOpen}
            placeholder="Select your VANNE"
            open={open4}
            value={value4}
            items={vanne_DHT}
            setOpen={setOpen4}
            setValue={setValue4}
            zIndex={1000}
          />
        </View>
      </View>
      <View style={{height: 150}}>
        <TouchableOpacity onPress={navigation.navigate("Help")}>
          <Text
            style={{
              color: COLORS.RED,
              fontSize: 16,
              fontWeight: "700",
              textAlign: "right",
              marginHorizontal: 30,
            }}
            onPress={navigateHelp}
          >
            help?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadiusTopRight: 5,
          borderRadiusTopLeft: 5,
          backgroundColor: "rgba(12, 12, 12, 0.6)",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity
          onPress={() => confirmHandler()}
          style={{
            backgroundColor: "rgba(7, 215, 121, 0.5)",
            margin: 10,
            width: (windowWidth * 38) / 100,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: (windowWidth * 38) / 100,
            margin: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              color: "white",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 20,
    color: "#000",
    opacity: 0.7,
    fontSize: 14,
    fontWeight: "500",
  },
});
