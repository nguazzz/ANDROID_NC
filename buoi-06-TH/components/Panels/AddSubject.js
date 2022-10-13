import { View, Text, StyleSheet, Button } from "react-native";

import React, { Component, useState } from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";

function AddSubject(props) {
  const { index, data } = props;

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>{index + 1}</Text>
        </View>
        <View>
          <Text>{data.inputedSubject}</Text>
        </View>
        <View>
          <Button title="Delete"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
export default AddSubject;
