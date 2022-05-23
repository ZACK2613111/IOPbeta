import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Animated} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import COLORS from "../../data/colors";

const buttonSize = 50;

// For Test

const FloatingActionButton = ({
  navigation,
  setDisplayDelete,
  idRaspBerry,
  index,
  plantToDelete,
}) => {
  const deletePlant = async (plantToDelete) => {
    try {
      await deleteDoc(
        ref(db, "raspberries/" + idRaspBerry + "/data/" + index),
        plantToDelete
      );
    } catch (e) {
      console.log(e);
    }
  };
  const [pressed, setPressed] = useState(false);
  const [active, setActive] = useState(false);
  const [animation] = useState(new Animated.Value(1));

  const actions = [
    {
      title: "Add",
      onPress: () => {
        navigation.navigate("Addplant", {index, idRaspBerry});
      },
      nameIcon: "plus",
    },
    {
      title: "Delete",
      onPress: () => {
        // plantToDelete = [

        // ]
        setActive(!active);
        setDisplayDelete(true);
        deletePlant(plantToDelete);
      },
      nameIcon: "delete",
    },
  ];

  // 1653256052463
  // 1653256079573,
  // 1653316284464,
  useEffect(() => {
    active ? animateTiming(0) : animateTiming(1);
  }, [active]);

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
          >
            <TouchableOpacity onPress={action.onPress} style={styles.action}>
              <Icon
                color={"white"}
                name={action.nameIcon}
                size={25}
                style={{alignItems: "center", justifyContent: "center"}}
              ></Icon>
            </TouchableOpacity>
          </Animated.View>
        );
      })}

      <TouchableOpacity
        style={styles.main}
        onPress={() => {
          setActive(!active);
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
    right: 30,
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
    backgroundColor: COLORS.GREEN,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.25,
    shadowOffset: {height: 0.5, width: 0.5},
    elevation: 5,
  },
  action: {
    position: "absolute",
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 7,
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
