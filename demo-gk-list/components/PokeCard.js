import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PokeCard(props) {
  const { index, data, onDeleteList } = props;

  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "100%",
          width: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{index + 1}</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Text>{data.nameValue}</Text>
      </View>
      <View style={{ width: 100 }}>
        <Button
          style={{ margin: 10 }}
          onPress={() => {
            onDeleteList();
          }}
          title="Delete"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
