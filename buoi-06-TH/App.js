import { StatusBar } from "expo-status-bar";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AddSubject from "./components/Panels/AddSubject";
import Items from "./components/Panels/Items";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        panelOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Danh sach mon da dang ky" component={AddSubject} />
        <Stack.Screen name="Danh sach mon hoc" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
