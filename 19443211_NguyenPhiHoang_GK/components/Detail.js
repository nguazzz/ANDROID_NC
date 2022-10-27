import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import IconFont5 from "react-native-vector-icons/FontAwesome5";
import Detail from "./components/Detail";
import Product from "./components/Product";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function DetaiScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <MaterialCommunityIcons name="menu" size={40} />
        <Image
          style={styles.logo}
          source={require("./assets/donal.png")}
        ></Image>
      </View>
      <View>
        <View style={{ justifyContent: "flex-start", width: "100%" }}>
          <Text style={{ fontSize: 25 }}>ad-lib shoulder bag</Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold" }}>4.9</Text>
          <Text>1k+ Review</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ marginRight: 20, flexDirection: "row" }}>
          <Image
            style={{ marginRight: 20 }}
            source={require("./assets/b4.png")}
          />
          <Image source={require("./assets/d3.png")} />
        </View>

        <View>
          <Image source={require("./assets/v1.png")} />
        </View>
      </View>
      <View>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("./assets/b1.png")}
        ></Image>
      </View>
      <View style={{ width: "100%", borderBottomWidth: 1, padding: 5 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>WHAT WERE MADE OF</Text>
          <MaterialCommunityIcons
            size={20}
            name="plus"
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", borderBottomWidth: 1, padding: 5 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>SHIPPING</Text>
          <MaterialCommunityIcons
            size={20}
            name="plus"
          ></MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={App}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="detail"
          component={DetaiScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  button: {
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
