import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import AddSubject from "./AddSubject";

function Items(props) {
  const { list, onDeleteApp } = props;
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderWidth: 1,
          height: 30,
          width: "100%",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text> STT </Text>
        </View>
        <View
          style={{
            flex: 2,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ten</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text>CHON</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <ScrollView>
          {list.map((value, index) => {
            return (
              <Items
                key={value.id}
                index={index}
                data={value}
                onDeleteList={() => onDeleteApp(value.id)}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

export default Items;
