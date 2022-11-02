import React, { useRef, useEffect } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
} from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const SlideInView = (props) => {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 290,
      duration: 5000,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        marginLeft: slideAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        width: "100%",
        height: "100%",

        wordBreak: "break-all",
      }}
    >
      <FadeInView style={{}}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../img/maybay.jpg")}
        />
      </FadeInView>
      <SlideInView>
        <Text>Air plane</Text>
      </SlideInView>

      <Button
        onPress={() => navigation.navigate("Cau 5")}
        title="Cau 5>>"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
