import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const SwipeAnimation = () => {
  const animation = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animation.value }],
    };
  });
  const animatedIconLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animation.value > 60 ? withSpring(2) : withSpring(1) },
      ],
    };
  });
  const animatedIconRightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: animation.value < -60 ? withSpring(2) : withSpring(1) },
      ],
    };
  });

  //controlling gesture
  const gestureHnadler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = animation.value;
    },
    onActive: (event, ctx) => {
      animation.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animation.value = withSpring(0);
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={gestureHnadler}>
          <Animated.View style={styles.backGroundView}>
            <Animated.View
              style={[styles.leftIconContainer, animatedIconLeftStyle]}
            >
              <Image
                source={require("../assets/archieved.png")}
                style={styles.leftIcon}
              />
            </Animated.View>
            <Animated.View style={[styles.upperView, animatedStyle]}>
              <View style={styles.nameIconContainer}>
                <Text style={styles.nameIconText}>A</Text>
              </View>
              <View style={{ marginLeft: 40 }}>
                <Text style={styles.textStyle}>Demo Title</Text>
                <Text>Body text ....</Text>
              </View>
            </Animated.View>
            <Animated.View
              style={[styles.rightIconContaier, animatedIconRightStyle]}
            >
              <Image
                source={require("../assets/archieved.png")}
                style={styles.leftIcon}
              />
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default SwipeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  backGroundView: {
    backgroundColor: "green",
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  leftIconContainer: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  leftIcon: {
    height: "100%",
    width: "100%",
    tintColor: "white",
  },
  upperView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 5,
    position: "absolute",
    borderRadius: 10,
    alignItems: "center",
    zIndex: 999,
  },
  nameIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 25,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  nameIconText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  textStyle: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  rightIconContaier: { width: 20, height: 20, marginRight: 20 },
});
