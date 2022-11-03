import React, { useRef, useEffect, useState } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
} from "react-native";
import icon from "./img/conchuot.jpg";

export default ({ navigation }) => {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Button
        onPress={() => navigation.navigate("Cau 1")}
        title="Cau 1>>"
      ></Button>

      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: 100,
          height: 100,
        }}
      ></Animated.Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
