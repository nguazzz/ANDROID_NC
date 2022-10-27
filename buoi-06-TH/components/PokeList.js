//import PoreCompoent for preventing unnecesary updates.
import React from "react";
//import your components from react-native
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
//import styles for your component
import { StyleSheet } from "react-native";

import PokeCard from "../components/PokeCard";

function List(props) {
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
export default List;
const styles = StyleSheet.create({});
