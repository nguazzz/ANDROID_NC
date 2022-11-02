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
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 100,
      duration: 5000,
    }).start();
  }, [slideAnim]);

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
        opacity: fadeAnim,
        marginLeft: slideAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const FadeInView2 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 180,
      duration: 5000,
    }).start();
  }, [slideAnim]);

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
        opacity: fadeAnim,
        marginLeft: slideAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
const FadeInView3 = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(slideAnim, {
      toValue: 290,
      duration: 5000,
    }).start();
  }, [slideAnim]);

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
        opacity: fadeAnim,
        marginLeft: slideAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

// const SlideInView = (props) => {
//   const slideAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     // Will change fadeAnim value to 1 in 5 seconds
//     Animated.timing(slideAnim, {
//       toValue: 290,
//       duration: 5000,
//     }).start();
//   }, [slideAnim]);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         marginLeft: slideAnim, // Bind opacity to animated value
//       }}
//     >
//       {props.children}
//     </Animated.View>
//   );
// };

export default ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        wordBreak: "break-all",
      }}
    >
      <FadeInView style={{}}>
        <Image style={{ width: 70, height: 70, backgroundColor: "red" }} />
      </FadeInView>
      <FadeInView2 style={{}}>
        <Image style={{ width: 70, height: 70, backgroundColor: "green" }} />
      </FadeInView2>
      <FadeInView3 style={{}}>
        <Image style={{ width: 70, height: 70, backgroundColor: "blue" }} />
      </FadeInView3>
      <Button
        onPress={() => navigation.navigate("Cau 6")}
        title="Cau 6>>"
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
