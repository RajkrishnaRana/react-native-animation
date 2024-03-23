import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from "react-native-reanimated";

const FloatingWindow = () => {
  const width = useSharedValue(0);
  const yValue = useSharedValue(60);
  const iconScale = useSharedValue(0);
  const closeIcon = useSharedValue(30);
  const uploadIcon = useSharedValue(0);

  const menuStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      transform: [{ translateY: yValue.value }],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }],
    };
  });

  const closeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: closeIcon.value },
        { scale: closeIcon.value === -50 ? withSpring(1) : 0 },
      ],
    };
  });

  const uploadStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: uploadIcon.value },
        { scale: uploadIcon.value === -50 ? 0 : withSpring(1) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.fixViewContainer}>
        <Animated.View style={[styles.openAnimatedView, menuStyle]}>
          <Animated.Image
            source={require("../assets/gallery.png")}
            style={[styles.iconStyle, iconStyle]}
          />
          <Animated.Image
            source={require("../assets/folder.png")}
            style={[styles.iconStyle, iconStyle]}
          />
          <Animated.Image
            source={require("../assets/photo-camera.png")}
            style={[styles.iconStyle, iconStyle]}
          />
          <Animated.Image
            source={require("../assets/google-docs.png")}
            style={[styles.iconStyle, iconStyle]}
          />
        </Animated.View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => {
            if (width.value === 0) {
              width.value = withTiming(300, { duration: 300 });
              yValue.value = withTiming(-50, { duration: 500 });
              iconScale.value = withTiming(1, { duration: 500 });
              uploadIcon.value = withTiming(-50, { duration: 100 });
              closeIcon.value = withTiming(-50, { duration: 100 });
            } else {
              width.value = withTiming(0, { duration: 300 });
              yValue.value = withTiming(70, { duration: 300 });
              iconScale.value = withTiming(0, { duration: 100 });
              uploadIcon.value = withTiming(0, { duration: 100 });
              closeIcon.value = withTiming(0, { duration: 100 });
            }
          }}
        >
          <Animated.Image
            source={require("../assets/cloud-computing.png")}
            style={[styles.iconStyle, uploadStyle]}
          />
          <Animated.Image
            source={require("../assets/close.png")}
            style={[styles.closeIconStyle, closeStyle]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FloatingWindow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fixViewContainer: {
    width: "100%",
    height: "50%",
  },
  openAnimatedView: {
    width: 300,
    height: 70,
    borderRadius: 35,
    backgroundColor: "black",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    height: 30,
    width: 30,
    tintColor: "white",
  },
  closeIconStyle: {
    height: 25,
    width: 25,
    tintColor: "white",
    position: "absolute",
    top: 70,
  },
});
