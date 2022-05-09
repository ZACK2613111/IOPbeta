import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Animated} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import COLORS from "../../data/colors";

const buttonSize = 50;
const actions = [
  {
    title: "Add",
    onPress: {},
    nameIcon: "plus",
  },
  {
    title: "Delete",
    onPress: {},
    nameIcon: "delete",
  },
];

const FloatingActionButton = ({navigation}) => {
  const [pressed, setPressed] = useState(false);
  const [active, setActive] = useState(false);
  const [animation] = useState(new Animated.Value(1));

  useEffect(() => {
    active ? animateTiming(0) : animateTiming(1);
  });

  const animateTiming = (toValue) => {
    Animated.spring(animation, {
      toValue: toValue,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const opacityAnimation = () => {
    return animation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });
  };

  const actionTranslateY = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [1, 2],
          outputRange: [0, 100],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      {actions.map((action, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.actionContainer,
              {opacity: opacityAnimation()},
              actionTranslateY,
            ]}
            onPress={() => navigation.navigate("addPlant")}
          >
            <TouchableOpacity style={styles.action}>
              <Icon
                color={"white"}
                name={action.nameIcon}
                size={25}
                style={{alignItems: "center", justifyCorntent: "center"}}
              ></Icon>
            </TouchableOpacity>
          </Animated.View>
        );
      })}

      <TouchableOpacity
        style={styles.main}
        onPress={() => {
          setActive(!active);
          // blur();
        }}
      >
        <Icon color={"black"} name={!active ? "plus" : "close"} size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -50,
    right: 5,
  },
  actionContainer: {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    marginBottom: 10,
    bottom: buttonSize,
  },
  main: {
    position: "absolute",
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.GREEN,
    // backgroundColor: active ? "#fff" : COLORS.GREEN,
    shadowOpacity: 0.25,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 5,
  },
  action: {
    position: "absolute",
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 7,
    // backgroundColor: pressed ? "#fff" : COLORS.GREEN,
    backgroundColor: COLORS.GREEN,
    justifyContent: "center",
    shadowOpacity: 0.25,
    padding: 12,
    shadowOffset: {height: 0.5, width: 0.5},
  },
  text: {
    textAlign: "center",
  },
});

export default FloatingActionButton;
