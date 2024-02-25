import { View } from "react-native";
import React from "react";
import BasicAnimation from "./src/screens/BasicAnimation";
import InterPolationAnimation from "./src/screens/InterPolationAnimation";
import InstagramLike from "./src/screens/InstagramLike";
import SwipeAnimation from "./src/screens/SwipeAnimation";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <SwipeAnimation />
      {/* <InstagramLike /> */}
      {/* <InterPolationAnimation /> */}
      {/* <BasicAnimation /> */}
    </View>
  );
};

export default App;
