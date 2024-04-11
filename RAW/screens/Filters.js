import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import COLORS from '../constants/colors';

const Filters = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilter = (filter) => {
    const isSelected = selectedFilters.includes(filter);
    if (isSelected) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
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
      <Text style={styles.title}>Filters</Text>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Computer Parts") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Computer Parts")}
      >
        <Text style={styles.filterText}>Computer Parts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Peripherals") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Peripherals")}
      >
        <Text style={styles.filterText}>Peripherals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Accessories") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Accessories")}
      >
        <Text style={styles.filterText}>Accessories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Cables") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Cables")}
      >
        <Text style={styles.filterText}>Cables</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Brands") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Brands")}
      >
        <Text style={styles.filterText}>Brands</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Price Range") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Price Range")}
      >
        <Text style={styles.filterText}>Price Range</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedFilters.includes("Ratings") && styles.selectedFilter,
        ]}
        onPress={() => toggleFilter("Ratings")}
      >
        <Text style={styles.filterText}>Ratings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => console.log("Selected Filters:", selectedFilters)}
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.secondary,
  },
  filterButton: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.lightgrey,
    borderRadius: 5,
  },
  selectedFilter: {
    backgroundColor: COLORS.lightblue,
  },
  filterText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 16,
    color: COLORS.white,
  },
  applyButton: {
    backgroundColor: COLORS.blue,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  applyButtonText: {
    fontFamily: 'Montserrat_400Regular',
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Filters;
