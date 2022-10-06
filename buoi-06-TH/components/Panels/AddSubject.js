import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { COLOURS } from "../database/Database";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
const AddSubject = () => {
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
          <Text
            style={{
              fontWeight: "600",
              fontSize: 14,
              marginTop: 12,
              alignItems: "center",
            }}
          >
            Subject:
          </Text>
          <TextInput
            placeholder="Nhap ten mon hoc"
            style={{
              padding: 10,
              width: "70%",
              backgroundColor: COLOURS.backgroundMedium,
            }}
          ></TextInput>
          <TouchableOpacity>
            <Entypo
              name="add-to-list"
              style={{
                fontSize: 18,
                color: COLOURS.black,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.backgroundLight,
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddSubject;
