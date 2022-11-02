import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const cau3 = ({ navigation }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const SlideAnim = useRef(new Animated.Value(0)).current;

  const Slide = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(SlideAnim, {
      toValue: 290,
      duration: 5000,
    }).start();
  };

  // const Stop = () => {
  //   Animated.timing(SlideAnim, { useNativeDriver: "false" })
  //     .start({
  //       finished: true,
  //     })
  //     .start();
  // };
  const Restart = () => {
    Animated.timing(SlideAnim, {
      toValue: 0,
      duration: 0,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          // Bind opacity to animated value
          marginLeft: SlideAnim,
        }}
      >
        <Text style={styles.fadingText}>Air plane</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Start" onPress={Slide} />
        {/* <Button title="Stop" onPress={Stop} /> */}
        <Button title="Restart" onPress={Restart} />
      </View>

      <Button
        title="Cau 4>>"
        onPress={() => navigation.navigate("Cau 4")}
      ></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
});

export default cau3;
