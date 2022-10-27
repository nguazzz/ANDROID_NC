import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import PokeCard from "../components/PokeCard";

export default function List(props) {
  const { arr, onDeleteApp } = props;

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
          height: 40,
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
          <Text>Stt</Text>
        </View>
        <View
          style={{
            flex: 5,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Ten </Text>
        </View>
        <View style={{ flex: 2, alignItems: "center" }}>
          <Text>Chon</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {arr.map((value, index) => {
            return (
              <PokeCard
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

const styles = StyleSheet.create({});
