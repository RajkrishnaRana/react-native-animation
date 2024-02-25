import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const InterPolationAnimation = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 0], [100, 200]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 0],
      ["#3dd465", "#f2eb0c"]
    );
    const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
    return {
      width: width,
      height: width,
      backgroundColor,
      borderRadius,
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.orangeBox, animatedStyle]}></Animated.View>
      <TouchableOpacity
        style={styles.animationTriggerButton}
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(1, { duration: 500 });
          } else {
            animation.value = withTiming(0, { duration: 500 });
          }
          setClicked(!clicked);
        }}
      >
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterPolationAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orangeBox: {
    height: 50,
    width: 50,
    backgroundColor: "#3dd465",
  },
  animationTriggerButton: {
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#9ddeeb",
  },
});
