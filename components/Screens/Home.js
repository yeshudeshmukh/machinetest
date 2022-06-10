import React,{useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';


const Home = ({ navigation }) => {
  return (
   <View style={{ flex:1, padding: 20, backgroundColor: '#fff',}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex:1
        }}>
        <Text>Hello Yeshu</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/Images/user-profile.jpg')}
            style={{ width: 50, height: 50, borderRadius: 50, padding: 5 }}
          />
        </TouchableOpacity>
      </View>
      
     
    </View>
  );
};
export default Home;

const style=StyleSheet.create({
  btn:{
     backgroundColor: '#AD40AF',
     paddingVertical: 5,
      paddingHorizontal: 10,
          borderRadius: 20,
  }
})