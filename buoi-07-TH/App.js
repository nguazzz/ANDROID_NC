import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getImages = async () => {
    try {
      const response = await fetch(
        "https://634758bf0484786c6e7f103b.mockapi.io/api/v1//Mock_Image_Demo"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      // console.error(error);
      <Text>Loi</Text>;
    } finally {
      setLoading(false);
    }
  };
  // const getImages = () => {
  //   fetch(
  //     "https://127.0.0.1:5554/6347710bdb76843976ab77f0.mockapi.io/api/Image"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // };
  useEffect(() => {
    getImages();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>
              {item.id}, {item.image},{item.name}
            </Text>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
