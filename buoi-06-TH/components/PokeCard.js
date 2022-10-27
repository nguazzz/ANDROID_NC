//import React form react
import React from "react";
import { TouchableOpacity, Text, View, Image, Button } from "react-native";
//import styles fro your PokeCard component.
import { StyleSheet } from "react-native";
//Define your stateless componetns, and destrcuts props from function arguments
function PokeCard(props) {
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
        <Text> {index + 1} </Text>
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
          title="Delete"
          onPress={() => {
            onDeleteList();
          }}
        ></Button>
      </View>
    </View>
  );
}
export default PokeCard;
const styles = StyleSheet.create({});
