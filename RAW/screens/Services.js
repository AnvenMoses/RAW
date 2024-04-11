import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import COLORS from '../constants/colors';
import Button from '../components/Button';

const ServicesScreen = () => {
  const navigation = useNavigation();

  const handleViewCategories = () => {
    navigation.navigate('Home', { screen: 'CATEGORY' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Our PC Services</Text> {}
      <View style={styles.services}>
        <View style={styles.service}>
          <Ionicons name="hardware-chip-outline" size={24} color={COLORS.primary} style={styles.serviceIcon} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceTitle}>Computer Components</Text>
            <Text style={styles.serviceDescription}>
              Discover high-quality components to assemble your dream PC.
            </Text>
          </View>
        </View>
        <View style={styles.service}>
          <Ionicons name="desktop-outline" size={24} color={COLORS.primary} style={styles.serviceIcon} />
          <View style={styles.serviceDetails}>
            <Text style={styles.serviceTitle}>Peripherals</Text>
            <Text style={styles.serviceDescription}>
              Enhance your computing experience with top-notch peripherals.
            </Text>
          </View>
        </View>
        {}
      </View>
      {}
      <TouchableOpacity style={styles.button} onPress={handleViewCategories}>
        <Text style={styles.buttonText}>View All Categories</Text> {}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.secondary,
    textAlign: 'center',
  },
  services: {
    flex: 1,
  },
  service: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  serviceIcon: {
    marginRight: 15,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20, // Optional margin at the bottom
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export default ServicesScreen;
