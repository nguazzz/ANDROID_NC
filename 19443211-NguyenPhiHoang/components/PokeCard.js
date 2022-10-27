import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
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
        <TouchableOpacity>
          <Ionicons name="menu" color={"#000000"} size={50} />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={{
            uri: "https://cdn.theatlantic.com/thumbor/c5-jr0vVU-2ViovON20AljxSPM0=/0x195:5656x3377/1440x810/media/img/2016/05/03/WEL_McAdams_Trump_Opener_nobugger/original.jpg",
          }}
        ></Image>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Get your Favorite Bag!
        </Text>
      </View>
      <View style={{ borderWidth: 1, width: "100%", flexDirection: "row" }}>
        <TouchableOpacity>
          <Ionicons name="search" size={50} />
        </TouchableOpacity>
        <TextInput placeholder="Search"></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity style={styles.button}>
          <Text>ALL BAGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>BACKPACKS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>LUGGAGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
