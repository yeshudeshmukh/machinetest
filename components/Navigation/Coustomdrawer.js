import React from 'react';
import { Text,View,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icons from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Coustomdrawer = (probs) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...probs}>
      <ImageBackground source={require("../../assets/Images/menu-bg.jpg")} style={{padding:20}}>
      <Image source={require("../../assets/Images/user-profile.jpg")} style={{width:80,height:80,borderRadius:50}}/>
      <Text style={{color:"#fff",fontSize:17,fontWeight:"bold",paddingVertical:5}}>Yeshu Deshmukh</Text>
      <View style={{flexDirection:"row",color:"#fff",alignItems:"center"}}>
        
      </View>
      </ImageBackground>

        <DrawerItemList {...probs} />
         <View style={{borderTopWidth:1,fontSize:20}} >
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,marginVertical:20}} >
          <Icons name="share-alt" size={20}/>
          <Text style={{marginLeft:20}}>Share to Friend's</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",alignItems:"center",paddingHorizontal:20,marginVertical:20}} >
          <MaterialIcons name="logout" size={20}/>
          <Text style={{marginLeft:20}}>Log Out</Text>
        </TouchableOpacity>
      </View>
      </DrawerContentScrollView>
     
    </View>
  );
};
export default Coustomdrawer;