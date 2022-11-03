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
import Icon from "react-native-vector-icons/FontAwesome5";

export default ({ navigation }) => {
  const [location, setLocation] = useState({
    x: Math.random(),
    y: Math.random(),
    marginLeft: new Animated.Value(0),
    marginTop: new Animated.Value(0),
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

    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Release!");
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
        onPress={() => navigation.navigate("Cau 3")}
        title="Cau 3>>"
      ></Button>
      <Animated.View
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
        }}
      >
        <Icon name="dog" style={{ fontSize: 40 }} />
      </Animated.View>
      <Animated.View
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
        }}
      >
        <Icon name="dog" style={{ fontSize: 40 }} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
