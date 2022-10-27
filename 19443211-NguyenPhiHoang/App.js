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
import Product from "./components/Product";
export default function App() {
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
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image source={require("./assets/g1.png")}></Image>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Image source={require("./assets/d2.png")}></Image>
        </View>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "#edebe6" }}>
        <View style={{ margin: 5, flex: 1 }}>
          <Image
            style={{ width: 45, height: 45 }}
            source={require("./assets/search.jpg")}
          ></Image>
        </View>
        <TextInput style={{ flex: 7 }} placeholder="Search"></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            marginLeft: 30,
            backgroundColor: "#141108",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text style={{ color: "#edebe6" }}>ALL BAGS</Text>
        </View>
        <View
          style={{
            marginLeft: 30,
            backgroundColor: "#edebe6",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text>BACKPACKS</Text>
        </View>
        <View
          style={{
            marginLeft: 30,
            backgroundColor: "#edebe6",
            borderRadius: 5,
            padding: 5,
          }}
        >
          <Text>LUNGGAGES</Text>
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
