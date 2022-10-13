import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState, Component } from "react";
import { Rating, AirbnbRating } from "react-native-ratings";

import React from "react";

export default function GridView(props) {
  let { name, urlImage } = props.dataGrid;
  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
        padding: 20,
        marginHorizontal: 10,
      }}
    >
      <View style={{ width: 170 }}>
        <View>
          <Image style={{ width: 155, height: 90 }} source={urlImage}></Image>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text>{name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Rating
              imageSize={18}
              tintColor="#E5E5E5"
              style={{ paddingVertical: 5 }}
              ratingBackgroundColor="rgba(196, 196, 196, 1)"
              type="custom"
            />
            <Text> (15)</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>69.900 đ</Text>
            <Text style={{ color: "gray" }}>-39%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
