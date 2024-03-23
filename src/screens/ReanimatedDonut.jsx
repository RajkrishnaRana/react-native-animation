import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSharedValue, withTiming } from "react-native-reanimated";
import {
  calculatePercentage,
  generateRandomNumbers,
} from "../utils/generateRandomNumbers";
import RenderItem from "../components/RenderItem";
import DonutChart from "../components/DonutChart";
import { useFont } from "@shopify/react-native-skia";

const RADIUS = 160;
const STROKE_WIDTH = 30;
const OUTER_STROKE_WIDTH = 46;
const GAP = 0.04;

const ReanimatedDonut = () => {
  const n = 5;
  const [data, setData] = useState([]);
  const totalValue = useSharedValue(0);
  const decimal = useSharedValue([]);
  const colors = ["#fe769c", "#46a0f8", "#c3f439", "#88dabc", "#e43433"];

  const generateData = () => {
    const generateNumbers = generateRandomNumbers(n);
    const total = generateNumbers.reduce(
      (acc, currentValue) => acc + currentValue
    );
    const generatePercentage = calculatePercentage(generateNumbers, total);
    const generateDecimals = generatePercentage.map(
      (number) => Number(number.toFixed(0)) / 100
    );

    const arrayOfObjects = generateNumbers.map((value, index) => ({
      value,
      percentage: generatePercentage[index],
      color: colors[index],
    }));

    totalValue.value = withTiming(total, { duration: 1000 });
    decimal.value = [...generateDecimals];
    setData(arrayOfObjects);
  };

  const font = useFont(require("../assets/font/Roboto-Bold.ttf"), 60);
  const smallFont = useFont(require("../assets/font/Roboto-Light.ttf"), 25);

  if (!font || !smallFont) return <View />;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.chartContainer}>
          <DonutChart
            radius={RADIUS}
            strokeWidth={STROKE_WIDTH}
            outerStrokeWidth={OUTER_STROKE_WIDTH}
            totalValue={totalValue}
            font={font}
            smallFont={smallFont}
            n={n}
            gap={GAP}
            decimal={decimal}
            colors={colors}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={generateData}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
        {data.map((item, index) => (
          <RenderItem item={item} index={index} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ReanimatedDonut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  chartContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    marginTop: "20%",
  },
  button: {
    marginTop: "10%",
    backgroundColor: "#f4f7dc",
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: "10%",
  },
  buttonText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "900",
    alignSelf: "center",
  },
});
