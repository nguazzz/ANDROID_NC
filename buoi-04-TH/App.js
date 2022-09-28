import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,Button,TouchableOpacity} from 'react-native';
import { HStack, VStack, ActivityIndicator ,IconButton} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  return (


    <View style={styles.container}>
        <View style={styles.header}>

          <View style={{flex:4 ,flexWrap:'wrap' ,width:'100%'}}>

              <HStack m={25} mt={50} spacing={25}>
                  <VStack spacing={20}>
                      <Image style={{width:125 ,height:160}} source={require('./assets/book.png')}></Image>
                      <Text style={styles.textBold} >Mã giảm giá đã lưu</Text>
                  </VStack>
                 
                  <VStack alignItems='baseline' spacing={11.5} >

                      <Text style={styles.textBold}>Nguyên hàm tích phân và ứng dụng</Text>
                      <Text style={styles.textBold}>Cung cấp bởi Tiki Trading</Text>
                      <Text style={styles.styleText}>141.800 đ</Text>
                      <Text style={{ color:'gray',textDecorationLine: 'line-through' }}>141.800 đ</Text>
                      
                      <View  style={{ flexDirection:'row', alignItems:'center', width:'100%' }}  >
                        <IconButton icon={props => <Icon name="plus-box" {...props} />}color='gray'  />
                        <Text > 1</Text>
                        <IconButton icon={props => <Icon name="minus-box" {...props} />} color='gray' />

                        <Text style={{color:'blue',marginLeft:60}}>Mua Sau</Text>
                        
                      </View>
                      <Text style={{color:'blue'}}>Xem tại đây</Text>
                  </VStack>
              </HStack>
          </View>

          {/* View Giam Gia */}
          <View style={{ flex:1.2,
                          width:"100%" ,
                          flexDirection:'row' ,
                          alignItems:'baseline',
                          alignItems:"center",
                          alignSelf:'stretch',
                          }} >

                <View style={{flex:3 ,justifyContent:'flex-start', flexDirection:'row',borderWidth:1 ,alignItems:'center',marginHorizontal:15,height:'55%'}}>
                  <Image style={{marginLeft:10,width:40,height:20}} source={require('./assets/yellow_block.png')}></Image>
                  <Text style={{marginLeft:15 ,fontWeight:'bold',fontSize:20}} >Mã giảm giá</Text>
                </View>

                <View style={{flex:1.5 ,borderWidth:1,height:'55%',marginRight:10,}}>
                  {/* <Button title='Áp dụng' style={{}}></Button> */}
                  {/* <Button title='Button' /> */}
                  <TouchableOpacity activeOpacity={1} style={styles.button}>
                      <Text style={{color:'#fff'}}>Áp dụng</Text>
                  </TouchableOpacity>
                 
                </View>
                 
          </View>
 
        </View>

        <View style={styles.center}>
          <Text style={styles.textBold}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?    </Text>
          <Text style={{color:'blue'}}>Nhập tại đây?</Text>

        </View>

        <View style={styles.bottom}>
          
          <View style={styles.tamtinh}>
            <Text style={{marginRight:220 ,fontWeight:'bold'}}>Tạm tính  </Text> 
            <Text style={styles.styleText}>  141.800 đ</Text>
            
          </View>
                            
          <View style={styles.nen}>
            <Text></Text>

          </View>
          <View style={styles.thanhtien}>
            <Text style={{marginRight:220 ,fontWeight:'bold'}}>Thành tiền </Text>
            <Text style={styles.styleText}>141.800 đ</Text>
          </View>

          <View style={{flex:1, alignContent:'stretch',width:'90%',justifyContent:'center',height:'100%', }}>
            <Button style={{height:'90%' }} title='TIẾN HÀNH ĐẶT HÀNG' color='red' ></Button>
          </View>

        </View>
        
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCB7B6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:5,
    backgroundColor:'#fff',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center:{
    flex:1,
    backgroundColor:'#fff',
    marginVertical:20,
    width:'100%',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
    
    
   
  },
  bottom:{
    flex:5,
    backgroundColor:'#fff',
    width:'100%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tamtinh:{
    flex:1,
    justifyContent:'center',
    backgroundColor :'#fff',
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    fontSize:30
    
    

  },
  nen:{
    flex:2,
    backgroundColor:'#BCB7B6',
    width:'100%'
  },
  thanhtien:{
    flex:1,
    backgroundColor:'#fff',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    display:'flex'
    
  },
  btnThanhtien:{
    flex:1,
    
    width:'100%',
    height:'100%',
  },
  styleText:{
    color:'red'
  },
  button: {
    flexDirection: 'row', 
    height: '100%', 
    backgroundColor:'rgba(10, 94, 183, 1)',
    alignItems: 'center',
    justifyContent: 'center',

    elevation:3,
},
  textBold:{
    fontWeight:'bold',
  }
  

});
