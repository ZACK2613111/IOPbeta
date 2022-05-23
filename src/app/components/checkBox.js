import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import COLORS from "../../data/colors";

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "check-circle"
    : "checkbox-blank-circle-outline";

  return (
    <View>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons name={iconName} size={26} color={COLORS.RED} />
      </Pressable>
    </View>
  );
};

export default CheckBox;
