import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS, Items } from "../database/Database";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const unsubcribe = navigation.addListener("focus", () => {
      getDataFromDB();
    });
    return unsubcribe;
  }, [navigation]);

  //get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let i = 0; i < Items.length; i++) {
      if (Items[i].category == "product") {
        productList.push(Items[i]);
      } else if (Items[i].category == "accessory") {
        accessoryList.push(Items[i]);
      }
    }
    setProducts(productList);
    setAccessories(accessoryList);
  };

  //create an products reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity style={{ width: "48%", marginVertical: 14 }}>
        {/* <View
          style={{
            width: "100%",
            height: "100%",
            borderRadious: 100,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                top: 0,
                left: 0,
                backgroundColor: COLOURS.green,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
          />
        </View> */}
        {/* <Text>{data.productName}</Text> */}
        <View
          style={{
            width: "100%",
            height: 100,
            borderRadious: 100,
            backgroundColor: COLOURS.backgroundLight,
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: "absolute",
                width: "20%",
                height: "24%",
                top: 0,
                left: 0,
                backgroundColor: COLOURS.green,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: "bold",
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>
        {data.accessory == "accessory" ? null : null}
        <Text>&#8363;{data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.backgroundLight,
      }}
    >
      <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadious: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadious: 10,
                backgroundColor: COLOURS.backgroundLight,
                borderColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "400",
              letterSpacing: 1,
              marginBottom: 10,
            }}
          >
            Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với Shop
          </Text>
        </View>
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: "500",
                letterSpacing: 1,
              }}
            >
              Products
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: "400",
                opacity: 0.5,
                marginLeft: 10,
              }}
            >
              8
            </Text>
          </View>

          <Text
            style={{ fontSize: 14, color: COLOURS.blue, fontWeight: "400" }}
          >
            See all
          </Text>
        </View>
        <View>
          {products.map((data) => {
            return <ProductCard data={data} key={data.id} />;
          })}
        </View>
        <View>
          {accessories.map((data) => {
            return <ProductCard data={data} key={data.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
