import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import COLORS from '../constants/colors';

import logo from '../assets/RAWLOGO.jpg';
import member1 from '../../RAW/assets/nanaaan.jpg';
import member2 from '../../RAW/assets/amben.jpg';
import member3 from '../../RAW/assets/wen.jpg';

const Aboutus = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Welcome to the Land of Dawn!</Text>
      <Text style={styles.description}>
        We are dedicated to providing the best computer components and peripherals to enhance your computing experience.
      </Text>
      <View style={styles.member}>
        <Image source={member1} style={styles.memberImage} />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Reynan Jhay A. Busano</Text>
          <Text style={styles.memberRole}>Roam</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image source={member2} style={styles.memberImage} />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Anven Moses L. Agbulos</Text>
          <Text style={styles.memberRole}>Core</Text>
        </View>
      </View>
      <View style={styles.member}>
        <Image source={member3} style={styles.memberImage} />
        <View style={styles.memberInfo}>
          <Text style={styles.memberName}>Wyne Khristian B. Ipanag</Text>
          <Text style={styles.memberRole}>MAGE/CORE</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.secondary,
  },
  description: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  member: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  memberRole: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: COLORS.black,
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
});

export default Aboutus;
