// // 1_a
import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')}></ImageBackground>
      <view style={styles.container}>
        <Image style={styles.logo} 
          source={require('./assets/circle.png')}></Image>
      </view>
      <view style={styles.center}>
        <Text style={styles.title}><h3>GROW YOUR BUSINESS</h3></Text>
        <Text style={styles.title}>We will help you to grow your business using online server</Text>
      </view>
      <view style={styles.below}>
        <Button style={styles.button}>LOGIN</Button>
        <Button style={styles.button}>SIGN UP</Button>
        <Text style={styles.question}><h3>HOW WE WORK?</h3></Text>
      </view>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  below: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  title: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius:4,

    textAlign:'center',
    backgroundColor:'#ebd534'
  },
  question: {
    alignItems: 'center',
     justifyContent: 'center',
  },
});






