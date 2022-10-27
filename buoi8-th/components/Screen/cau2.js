import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";

const cau2 = ({ navigation }) => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 290,
      duration: 5000,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            marginLeft: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Air plane</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Slide" onPress={fadeIn} />
      </View>

      <Button
        title="Cau 3>>"
        onPress={() => navigation.navigate("Cau 3")}
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
});

export default cau2;
