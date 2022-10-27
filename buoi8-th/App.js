import { View, Text } from "react-native";
import React from "react";

import cau1 from "./components/Screen/cau1";
import cau2 from "./components/Screen/cau2";
import cau3 from "./components/Screen/cau3";
import cau4 from "./components/Screen/cau4";
import cau5 from "./components/Screen/cau5";
import cau6 from "./components/Screen/cau6";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cau 1" component={cau1} />
        <Stack.Screen name="Cau 2" component={cau2} />
        <Stack.Screen name="Cau 3" component={cau3} />
        <Stack.Screen name="Cau 4" component={cau4} />
        <Stack.Screen name="Cau 5" component={cau5} />
        <Stack.Screen name="Cau 6" component={cau6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
