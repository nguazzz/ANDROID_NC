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

export default function App({ navigation }) {
  const product = [
    {
      name: "Ad-lib Shoulder Bag.Classic",
      urlImage: require("./assets/b1.png"),
    },
    {
      name: "Ad-lib Shoulder Bag.Classic",
      urlImage: require("./assets/b2.png"),
    },
    {
      name: "Ad-lib Shoulder Bag.Classic",
      urlImage: require("./assets/b3.png"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Image source={require("./assets/g1.png")}></Image>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Image source={require("./assets/d2.png")}></Image>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 33 }}>
          Get your Favourite Bag!
        </Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#edebe6" }}>
        <View style={{ margin: 5, flex: 1 }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./assets/search.jpg")}
          ></Image>
        </View>
        <TextInput style={{ flex: 7 }} placeholder="Search"></TextInput>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#141108",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text style={{ color: "#edebe6" }}>ALL BAGS</Text>
        </View>
        <View
          style={{
            backgroundColor: "#edebe6",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text>BACKPACKS</Text>
        </View>
        <View
          style={{
            backgroundColor: "#edebe6",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text>LUGGAGES</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <SafeAreaView style={{ width: "100%", height: "100%" }}>
          <FlatList
            data={product}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Product product={item} />}
            horizontal={true}
          ></FlatList>
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 50,
    flexDirection: "column",
    marginHorizontal: 40,
  },
});
