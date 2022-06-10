import React,{useState,useEffect} from "react";
import { Dimensions,View,StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import NaviStack from "./components/Navigation/StackNavi";


const App=()=>{
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');

  useEffect(() => {
    setHeight(Dimensions.get('window').height);
    setWidth(Dimensions.get('window').width);
  }, []);

  return(
    <View style={Style.mainContainer}>
      <NavigationContainer>
       <NaviStack/>
      </NavigationContainer>
    </View>
  );
}
export default App;
const Style=StyleSheet.create({
  mainContainer:{
    flex:1,
    width:"width-20",
    height:"height-40"

  }
})

