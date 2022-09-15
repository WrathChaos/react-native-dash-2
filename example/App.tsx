import React from "react";
import { View } from "react-native";
import Dash from "./lib/index";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Dash style={{ width: 250, height: 1 }} />
      <Dash style={{ width: 1, height: 100, flexDirection: "column" }} />
    </View>
  );
};

export default App;
