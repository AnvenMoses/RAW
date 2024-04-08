import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/colors';

const Contact = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/RAWLOGO.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.contactInfo}>
        <Ionicons name="location" size={24} color="white" />
        <Text style={styles.info}>Dani ra, lugar</Text>
      </View>
      <View style={styles.contactInfo}>
        <Ionicons name="call" size={24} color="white" />
        <Text style={styles.info}>09123456789</Text>
      </View>
      <View style={styles.contactInfo}>
        <Ionicons name="mail" size={24} color="white" />
        <Text style={styles.info}>raw@gmail.com</Text>
      </View>
      <Text style={styles.message}>
        Feel free to reach out to us for any inquiries or assistance.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.teal,
    paddingVertical: 20,
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
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: 'center',
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  info: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
  },
});

export default Contact;
