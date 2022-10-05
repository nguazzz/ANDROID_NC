import { View, Text, StatusBar, ScrollView } from "react-native";
import React from "react";
import COLOURS from "../database/Database";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {
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
              name="shopping-bag"
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
      </ScrollView>
    </View>
  );
};

export default Home;
