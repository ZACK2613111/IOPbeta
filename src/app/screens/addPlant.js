import {StatusBar} from "expo-status-bar";
import {useState} from "react";
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

const windowWidth = Dimensions.get("window").width;

const items = [
  {label: "Apple", value: "apple"},
  {label: "Banana", value: "banana"},
];

export default function addPlant({navigation}) {
  const [selectedValue, setSelectedValue] = useState("java");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [state, setState] = useState("");
  return (
    <View style={{height: "100%", width: "100%"}}>
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
        >
          <Image
            source={require("../../assets/Group.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#",
            borderRadius: 50,
            width: 25,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/select.png")}
            resizeMode="contain"
          ></Image>
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
          <Text style={{marginLeft: 20}}>Name</Text>
          <TextInput
            onChangeText={(text) => setText(text.trim())}
            value={text}
            style={{
              height: 50,
              width: (windowWidth * 90) / 100,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              borderRadius: 10,
              marginTop: 3,
              margin: (windowWidth * 5) / 100,
              paddingHorizontal: 15,
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholder="Lorem Ipsum"
            multiline={false}
            textAlign="left"
            textBreakStrategy="highQuality"
          />
        </View>
        <View>
          <Text style={{marginLeft: 20}}>Specie</Text>
          <TextInput
            onChangeText={(text1) => setText1(text1.trim())}
            value={text1}
            style={{
              height: 50,
              width: (windowWidth * 90) / 100,
              borderWidth: 1,
              borderColor: "#E3E3E3",
              borderRadius: 10,
              marginTop: 3,
              margin: (windowWidth * 5) / 100,
              paddingHorizontal: 15,
            }}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholder="Lorem Ipsum"
            multiline={false}
            textAlign="left"
            textBreakStrategy="highQuality"
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
          Hardware
        </Text>

        <View style={{}}>
          <Text style={{marginLeft: 20}}>Controller</Text>
          <DropDownPicker
            style={{
              marginTop: 3,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              zIndex: 800,
              // zIndexInverse: 1000,
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>

        <View style={{}}>
          <Text style={{marginLeft: 20}}>Moisture Sensor</Text>
          <DropDownPicker
            style={{
              marginTop: 3,
              borderColor: "#E3E3E3",
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              zIndex: 1500,
              // zIndexInverse: 2000,
            }}
            open={open1}
            value={value1}
            items={items}
            setOpen={setOpen1}
            setValue={setValue1}
            // zIndex={2000}
            // zIndexInverse={2000}
          />
        </View>

        <View style={{}}>
          <Text style={{marginLeft: 20}}>Pin Number</Text>
          <DropDownPicker
            style={{
              borderColor: "#E3E3E3",
              marginTop: 3,
              width: (windowWidth * 90) / 100,
              margin: (windowWidth * 5) / 100,
              zIndex: 1000,
              // zIndexInverse: 3000,
            }}
            open={open2}
            value={value2}
            items={items}
            setOpen={setOpen2}
            setValue={setValue2}
            customItemContainerStyle={{
              backgroundColor: "#f70000",
            }}
            // zIndex={1000}
            // zIndexInverse={1000}
          />
        </View>
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 72,
          width: (windowWidth * 90) / 100,
          margin: (windowWidth * 5) / 100,
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
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
        <Pressable
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
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            width: (windowWidth * 38) / 100,
            margin: 10,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
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
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});
