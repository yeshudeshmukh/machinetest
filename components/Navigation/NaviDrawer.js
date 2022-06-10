import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Coustomdrawer from "./Coustomdrawer"
import Fontawesome from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

import Profile from "../Screens/Profile";
import Home from "../Screens/Home";

const Drawer= createDrawerNavigator();

const NaviDrawer =()=>{
  return(
    <Drawer.Navigator drawerContent={probs=><Coustomdrawer{...probs}/>}  screenOptions={{
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        headerShown: false}}>
       
   <Drawer.Screen name="Home" component={Home}   options={{drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color}/>)}}/>
        
        
    </Drawer.Navigator>
    
  );
}
export default NaviDrawer;