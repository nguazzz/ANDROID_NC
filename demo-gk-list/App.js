import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import List from "./components/PokeList";

export default function App() {
  const [nameInput, setNameInput] = useState("");
  const [arrData, setArrData] = useState([
    {
      id: Math.random(),
      nameValue: "Nguyen Phi Hoang",
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
          style={{ flex: 1 }}
          onChangeText={(text) => setNameInput(text)}
          placeholder="Nhap cai gi do"
          value={nameInput}
        ></TextInput>
        <Button
          title="Them"
          onPress={() => {
            arrData.push({
              id: Math.random(),
              nameValue: nameInput,
            });
            setNameInput("");
          }}
        ></Button>
      </View>
      <View style={{ flex: 1, borderWidth: 1 }}>
        <List
          arr={arrData}
          onDeleteApp={(id) => {
            setArrData(arrData.filter((x) => x.id !== id));
          }}
        />
      </View>
    </View>
  );
}

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
