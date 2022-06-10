import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from "./Login";
import AsyncStorage from '@react-native-community/async-storage';

const OnBoardScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold' }}>WEL-COME</Text>

      <Image
        source={require('../../assets/Images/gaming.png')}
        style={{ width: 300, height: 250, marginVertical: 50 }}
      />
      <View style={{width:"90%",   borderRadius: 5}}>
        <TouchableOpacity
          style={{
            borderRadius: 5,
            padding: 7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'deepskyblue',
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>
            Let Beging
          </Text>
          <Icon name="arrow-forward" color={'#fff'} size={20} />
        </TouchableOpacity>
        
      </View>
    </View>
  );
};
export default OnBoardScreen;