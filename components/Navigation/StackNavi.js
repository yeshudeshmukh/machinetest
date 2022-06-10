import React from 'react';
import OnBoard from '../Screens/OnBoardScreen';
import Login from '../Screens/Login';
import Home from "../Screens/Home";
import Registration from "../Screens/Registration"

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import NaviDrawer from './NaviDrawer';


const Stack = createNativeStackNavigator();

const StackNavi = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="OnBoard" component={OnBoard} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: 'deepskyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
 />
       <Stack.Screen name="Home" component={NaviDrawer} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'deepskyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      <Stack.Screen name="Registration" component={Registration}  options={{
          title: 'Registration',
          headerStyle: {
            backgroundColor: 'deepskyblue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
  );
};
export default StackNavi;