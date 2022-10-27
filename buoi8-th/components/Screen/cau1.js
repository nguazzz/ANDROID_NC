import React, { useRef, useEffect } from "react";
import { Animated, Button, Text, View } from "react-native";

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

// You can then use your `FadeInView` in place of a `View` in your components:
export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        wordBreak: "break-all",
      }}
    >
      <FadeInView
        style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
      >
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            margin: 10,
            wordBreak: "break-all",
          }}
        >
          Welcome to animation React Native
        </Text>
      </FadeInView>

      <Button
        onPress={() => navigation.navigate("Cau 2")}
        title="Cau 2>>"
      ></Button>
    </View>
  );
};
