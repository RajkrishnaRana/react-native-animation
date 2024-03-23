import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skia, Path } from "@shopify/react-native-skia";
import { useDerivedValue, withTiming } from "react-native-reanimated";

const DonutPath = ({
  radius,
  gap,
  strokeWidth,
  color,
  decimals,
  index,
  outerStrokeWidth,
}) => {
  const innerRadius = radius - outerStrokeWidth / 2;

  const path = Skia.Path.Make();
  path.addCircle(radius, radius, innerRadius);

  const start = useDerivedValue(() => {
    if (index === 0) {
      return gap;
    }
    const decimal = decimals.value.slice(0, index);

    const sum = decimal.reduce((acc, curretnValue) => acc + curretnValue, 0);

    return withTiming(sum + gap, { duration: 1000 });
  });

  const end = useDerivedValue(() => {
    if (index === decimals.value.length - 1) {
      return withTiming(1, { duration: 1000 });
    }
    const decimal = decimals.value.slice(0, index + 1);

    const sum = decimal.reduce((acc, curretnValue) => acc + curretnValue, 0);

    return withTiming(sum, { duration: 1000 });
  });

  return (
    <Path
      path={path}
      color={color}
      style="stroke"
      strokeWidth={strokeWidth}
      strokeJoin="round"
      strokeCap="round"
      start={start}
      end={end}
    />
  );
};

export default DonutPath;

const styles = StyleSheet.create({});
