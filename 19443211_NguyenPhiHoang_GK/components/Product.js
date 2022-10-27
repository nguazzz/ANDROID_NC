import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { name, urlImage } = this.props.product;
    return (
      <View style={{ flexDirection: "column", width: "36%" }}>
        <TouchableOpacity>
          <Image
            source={urlImage}
            style={{
              width: 200,
              height: 200,
              justifyContent: "space-between",
            }}
          ></Image>

          <Text style={{ fontSize: 25 }}>+ Add to cart</Text>

          <Text style={{ fontSize: 30 }}>{name}</Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 40, textAlign: "center" }}
          >
            $905
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
