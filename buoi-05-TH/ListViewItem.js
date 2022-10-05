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
import { useState } from "react";
import { HStack, Stack } from "@react-native-material/core";
import React from "react";

export default function ListViewItem(props) {
  let { name, shop, uri } = props.data;
  return (
    <View
      style={{
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image style={{ width: 74, height: 74 }} source={uri}></Image>
      </View>

      <View
        style={{
          flex: 2,
          margin: 5,
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text>{name}</Text>
        <Text style={{ marginTop: 10 }}>Shop {shop} </Text>
      </View>

      <View
        style={{
          flex: 1,
          padding: 10,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            width: 88,
            height: 38,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
