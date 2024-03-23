import { SafeAreaView } from "react-native";
import React from "react";
import BasicAnimation from "./src/screens/BasicAnimation";
import InterPolationAnimation from "./src/screens/InterPolationAnimation";
import InstagramLike from "./src/screens/InstagramLike";
import SwipeAnimation from "./src/screens/SwipeAnimation";
import FloatingWindow from "./src/screens/FloatingWindow";
import AnimatedDonut from "./src/screens/AnimatedDonut";
import ReanimatedDonut from "./src/screens/ReanimatedDonut";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ReanimatedDonut />
      {/* <AnimatedDonut /> */}
      {/* <FloatingWindow /> */}
      {/* <SwipeAnimation /> */}
      {/* <InstagramLike /> */}
      {/* <InterPolationAnimation /> */}
      {/* <BasicAnimation /> */}
    </SafeAreaView>
  );
};

export default App;
