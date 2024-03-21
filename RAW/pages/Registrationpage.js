/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */

import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, TextInput } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import COLORS from '../constants/colors';

import logo from '../assets/RAWLOGO.jpg';

function Registrationpage(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    props.navigation.navigate('Login');
  };

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
          placeholder='Password'
          label='Password'
          style = {styles.input}
          secureTextEntry = {!showPassword}
          right={
        <TextInput.Icon
              icon={showPassword ? "eye" : "eye-off"}
              onPress={() => {
                Keyboard.dismiss;
                setShowPassword(!showPassword);
          }}
            color={COLORS.teal}
        />
          }
        />
        <Button
          style={styles.registerButton}
          mode="contained"
          onPress={handleRegister}
        >
          Register
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    height: 250,
    width: 250,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  registerButton: {
    width: '50%',
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: COLORS.primary,
  },
});

export default Registrationpage;
