import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import React, { Component, useState } from "react";
import Items from "./components/Panels/Items";

function App() {
  const [valueInput, setvalueInput] = useState("");
  const [listData, setlistData] = useState([
    {
      id: Math.random(),
      inputedSubject: "Ky thuat phan mem",
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          marginBottom: 20,
        }}
      >
        <TextInput
          style={{}}
          placeholder="Nhap ten "
          onChangeText={(text) => setvalueInput(text)}
          value={valueInput}
        ></TextInput>
        <Button
          title={"Them " + listData.length}
          onPress={() => {
            listData.push({
              id: Math.random(),
              inputedSubject: valueInput,
            });
            setvalueInput("");
          }}
        ></Button>
      </View>

      <View style={{ flex: 1, borderWidth: 1 }}>
        <Items
          list={listData}
          onDeleteApp={(id) => {
            setlistData(listData.filter((x) => x.id !== id));
          }}
        />
      </View>
    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  pokeListHeader: {
    fontSize: 20,
    color: "#fff",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  col1: {
    width: 40,
  },
  col2: {
    flexGrow: 1,
  },
  col3: {
    width: 100,
  },
  header: {
    backgroundColor: "#555",
  },
});
