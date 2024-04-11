import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import COLORS from '../constants/colors';
import logo from '../assets/RAWLOGO.jpg';

function Landingpage(props) {
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
      <Text style={styles.message}>Welcome to RAW!</Text>
      <Text style={styles.userMessage}>
        Explore our platform and discover amazing computer components and peripherals.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("CATEGORY")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Categories</Text> {/* Updated section title */}
        {/* Showcase favorite categories here */}
        {/* Example button */}
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => props.navigation.navigate("FeaturedCategories")}
        >
          <Text style={styles.categoryButtonText}>View Featured Categories</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Infographic Insights</Text> {/* Updated section title */}
        {/* Showcase infographic insights here */}
        {/* Example button */}
        <TouchableOpacity
          style={styles.infographicButton}
          onPress={() => props.navigation.navigate("InfographicInsights")}
        >
          <Text style={styles.infographicButtonText}>Explore Infographic Insights</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

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
  message: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.secondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  userMessage: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '70%',
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 5,
  },
  buttonText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 20,
    color: COLORS.white,
  },
  section: {
    width: '100%',
    marginTop: 30,
  },
  sectionTitle: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  categoryButton: {
    width: '70%',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 3,
  },
  categoryButtonText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: COLORS.white,
  },
  infographicButton: {
    width: '70%',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 3,
  },
  infographicButtonText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: COLORS.white,
  },
});

export default Landingpage;
