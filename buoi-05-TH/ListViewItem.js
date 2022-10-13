import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";

import * as React from "react";
import ItemProduct from "./ListViewItem";
import ItemGrid from "./GridView";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IonsIcon from "react-native-vector-icons/Ionicons";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Rating, AirbnbRating } from "react-native-ratings";
import { Header } from "react-native/Libraries/NewAppScreen";

// View Lap 4_a : List View
function ListViewScreen({ navigation }) {
  const [data, setData] = useState([
    {
      name: "Ca nấu lẩu , nấu mì mini...",
      shop: "Devang",
      uri: require("./assets/ca_nau_lau.png"),
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI ...",
      shop: "LTD Food",
      uri: require("./assets/ga_bo_toi.png"),
    },
    {
      name: "xe cần cẩu đa năng",
      shop: "Thế giới đồ chơi",
      uri: require("./assets/xa_can_cau.png"),
    },
    {
      name: "đồ chơi dạng mô hình",
      shop: "Thế giới đồ chơi",
      uri: require("./assets/do_choi_dang_mo_hinh.png"),
    },
    {
      name: "Lãnh đạo đơn giản ",
      shop: "Minh long Book",
      uri: require("./assets/lanh_dao_gian_don.png"),
    },
    {
      name: "hiểu lòng con trẻ",
      shop: "Minh long Book",
      uri: require("./assets/hieu_long_con_tre.png"),
    },
    {
      name: "Donal Trump Thiên tài lãnh đạo",
      shop: "Minh long Book",
      uri: require("./assets/trump.png"),
    },
    {
      name: "Ca nấu lẩu , nấu mì mini...",
      shop: "Devang",
      uri: require("./assets/ca_nau_lau.png"),
    },
    {
      name: "đồ chơi dạng mô hình",
      shop: "Thế giới đồ chơi",
      uri: require("./assets/do_choi_dang_mo_hinh.png"),
    },
    {
      name: "1KG KHÔ GÀ BƠ TỎI ...",
      shop: "LTD Food",
      uri: require("./assets/ga_bo_toi.png"),
    },
    {
      name: "Lãnh đạo đơn giản ",
      shop: "Minh long Book",
      uri: require("./assets/lanh_dao_gian_don.png"),
    },
    {
      name: "hiểu lòng con trẻ",
      shop: "Minh long Book",
      uri: require("./assets/hieu_long_con_tre.png"),
    },
    {
      name: "Donal Trump Thiên tài lãnh đạo",
      shop: "Minh long Book",
      uri: require("./assets/trump.png"),
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,

            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                paddingHorizontal: 15,
                fontSize: 15,
              }}
            >
              bạn có thắc mắc với sản phẩm vừa xem .Đừng ngại chát với shop!
            </Text>
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <SafeAreaView style={{ flex: 1, width: "100%" }}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ItemProduct data={item} key={item.name} />
              )}
            />
          </SafeAreaView>
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: "row",
            alignItems: "center",

            backgroundColor: "rgba(27, 169, 255, 1)",
          }}
        >
          <View style={{ flex: 1, marginLeft: 20 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 23, height: 13.85 }}
                source={require("./assets/bars.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/home.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end", marginRight: 20 }}>
            <TouchableOpacity>
              <Image
                style={{ width: 26.29, height: 24.39 }}
                source={require("./assets/back.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// View lap4_b: Grid View
function GridViewScreen({ navigation }) {
  const [dataGrid, setDataGrid] = useState([
    {
      urlImage: require("./assets/giacchuyen.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daynguon.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoipsps.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoi.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/carbusbtops.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daucam.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/giacchuyen.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daynguon.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoipsps.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/dauchuyendoi.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/carbusbtops.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
    {
      urlImage: require("./assets/daucam.png"),
      name: "Cáp chuyển từ Cổng USB sang PS2...",
    },
  ]);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 60,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "rgba(27, 169, 255, 1)",
        }}
      >
        <Icon.Button
          name="arrow-left-thick"
          backgroundColor={"rgba(27, 169, 255, 1)"}
          style={{}}
          size={30}
          activeOpacity={1}
          onPress={() => navigation.goBack()}
        ></Icon.Button>
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFF",
            height: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IonsIcon name="search" size={30} style={{ marginHorizontal: 10 }} />
          <TextInput
            placeholder="Search"
            autoCorrect={false}
            autoCapitalize={false}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{}}>
          <Icon.Button
            name="cart-check"
            size={28}
            backgroundColor="rgba(27, 169, 255, 1)"
          ></Icon.Button>
          <View
            style={{
              backgroundColor: "red",
              position: "absolute",
              borderRadius: 12,
              width: 12,
              height: 12,
              right: 15,
              top: 5,
            }}
          />
        </View>
        <View>
          <Icon.Button
            backgroundColor={"rgba(27, 169, 255, 1)"}
            size={30}
            name="dots-horizontal"
          ></Icon.Button>
        </View>
      </View>
      <SafeAreaView style={{ flex: 6, width: "100%" }}>
        <FlatList
          data={dataGrid}
          renderItem={({ item }) => (
            <ItemGrid dataGrid={item} key={item.name} />
          )}
          numColumns={2}
        />
      </SafeAreaView>
      <View
        style={{
          height: 60,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "rgba(27, 169, 255, 1)",
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Image
              style={{ width: 23, height: 13.85 }}
              source={require("./assets/bars.png")}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              style={{ width: 24, height: 24 }}
              source={require("./assets/home.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "flex-end", marginRight: 20 }}>
          <TouchableOpacity>
            <Image
              style={{ width: 26.29, height: 24.39 }}
              source={require("./assets/back.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
//View Home page
function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ margin: 20 }}>
        <Button
          title="Lap 4_a : List View"
          onPress={() => navigation.navigate("Chat")}
        />
      </View>
      <View>
        <Button
          title="Lap 4_b :Grid View"
          onPress={() => navigation.navigate("GridView")}
        ></Button>
      </View>
    </View>
  );
}

// navigation
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "rgba(27, 169, 255, 1)",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ListViewScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "rgba(27, 169, 255, 1)" },
            headerTintColor: "#fff",
            headerRight: () => (
              <Icon.Button
                name="cart-check"
                size={28}
                backgroundColor="rgba(27, 169, 255, 1)"
              ></Icon.Button>
            ),
          }}
        />
        <Stack.Screen
          name="GridView"
          component={GridViewScreen}
          options={{
            // title: "",
            // headerStyle: { backgroundColor: "rgba(27, 169, 255, 1)" },
            // headerTintColor: "#fff",
            header: () => <></>,

            // headerSearchBarOptions: {
            //   obscureBackground: false,
            //   hideNavigationBar: false,
            // },
            // headerRight: () => (
            //   <Icon.Button
            //     name="cart-check"
            //     size={28}
            //     backgroundColor="rgba(27, 169, 255, 1)"
            //   ></Icon.Button>
            // ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
