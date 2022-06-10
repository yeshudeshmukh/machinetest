import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = ({ navigation }) => {
   const [formValues, setformValues] = useState({
    email: '',
    phone_number: '',
    password: '',
  });
  const [isSubmit, setisSubmit] = useState(false);

  const handleOnchange = (text, input) => {
    setformValues((prevState) => ({ ...prevState, [input]: text }));
  };
  const [formErrors, setformErrors] = useState({});
  console.log(formValues);

  const submitForm = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setisSubmit(true);
  };

  
  const register = async () => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formValues));
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log('error not found')
      register();
    } else {
      console.log('form is not valid');
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }

    if (!values.phone_number) {
      errors.phone_number = 'Phone number is required';
    } else if (!re.test(values.phone_number)) {
      errors.phone_number = 'This is not a valid phone number';
    }

    return errors;
  };
 
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <View>
        <Image
          source={require('../../assets/Images/Login.png')}
          style={{ width: '100%', height: 300 }}
        />
      </View>

      <View style={Style.loginForm}>
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Registration</Text>

        <View style={Style.input}>
          <Fontisto  name="email" color={'#00000'} size={20} />
          <TextInput
            style={Style.textInput}
            name="email"
            value={formValues.email}
            onChangeText={(text) => handleOnchange(text, 'email')}
          />
        </View>
        <Text  style={Style.red} >{formErrors.email}</Text>
        <View style={Style.input}>
          <Feather name="phone" color={'#00000'} size={20} />
          <TextInput
            style={Style.textInput}
            onChangeText={(text) => handleOnchange(text, 'phone_number')}
          />
        </View>
        <Text  style={Style.red} >{formErrors.phone_number}</Text>
        <Text></Text>
        <View style={Style.input}>
          <Icon name="eye-slash" color={'#00000'} size={20} />
          <TextInput
            style={Style.textInput}
            secureTextEntry={true}
            onChangeText={(text) => handleOnchange(text, 'password')}
          />
        </View>
        <Text style={Style.red} >{formErrors.password}</Text>
        <TouchableOpacity style={Style.btn} onPress={submitForm}>
          <Text style={Style.btnText}>Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registration;
const Style = StyleSheet.create({
  loginForm: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
    paddingHoriznal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flexDirection: 'row',
    width: '80%',
    borderColor: 'deepskyblue',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginVertical: 8,
  },
  textInput: {
    outline: 'none',
    paddingLeft: 10,
  },
  btn: {
    backgroundColor: 'deepskyblue',
    padding: 7,
    width: '50%',
    borderRadius: 7,
    textAlign: 'center',
    marginVertical: 5,
  },
  btnText: {
    ontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  red:{
    color:"red"
  }
});
