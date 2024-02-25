import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const BasicAnimation = () => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: animation.value }] };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.orangeBox, animatedStyle]}></Animated.View>
      <TouchableOpacity
        style={styles.animationTriggerButton}
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(5, {});
          } else {
            animation.value = withSpring(0, {});
          }
          setClicked(!clicked);
        }}
      >
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasicAnimation;

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
