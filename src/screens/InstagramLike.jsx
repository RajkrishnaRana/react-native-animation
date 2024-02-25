import { ImageBackground, View, Image } from "react-native";
import React, { useCallback } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from "react-native-gesture-handler";

const ImageContent = Animated.createAnimatedComponent(Image);

const InstagramLike = () => {
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: Math.max(scale.value, 0) }],
    };
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TapGestureHandler
          maxDelayMs={250}
          numberOfTaps={2}
          onActivated={doubleTap}
        >
          <Animated.View>
            <ImageBackground
              source={require("../assets/bird-thumbnail.jpg")}
              style={{
                height: 500,
                width: 350,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageContent
                source={require("../assets/heart.png")}
                style={[
                  { height: 100, width: 100, tintColor: "white" },
                  animatedStyle,
                ]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default InstagramLike;
