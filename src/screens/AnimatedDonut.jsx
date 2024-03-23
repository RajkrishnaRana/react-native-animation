import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import DonutChart from "../components/DonutChart";
import { Easing, useValue, runTiming } from "@shopify/react-native-skia";

const Radius = PixelRatio.roundToNearestPixel(110);
const Stroke_Width = 12;

const AnimatedDonut = () => {
  const percentageComplete = 65 / 100;
  const animationState = useValue(0);

  const animateChart = () => {
    animationState.current = 0;
    runTiming(animationState, percentageComplete, {
      duration: 2200,
      easing: Easing.inOut(Easing.cubic),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.dounutChartContainer}>
        <DonutChart
          radius={Radius}
          strokeWidth={Stroke_Width}
          percetageComplete={animationState}
          targetPercentage={percentageComplete}
        />
      </View>
      <TouchableOpacity
        style={styles.animatedButtonContainer}
        onPress={animateChart}
      >
        <Text style={styles.animateButtonText}>Animate</Text>
      </TouchableOpacity>
      {/* <Text>Hello there</Text> */}
    </View>
  );
};

export default AnimatedDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dounutChartContainer: {
    height: 300,
    width: 300,
  },
  animatedButtonContainer: {
    height: "8%",
    width: "40%",
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  animateButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
