import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Processors</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Graphics Cards</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Motherboards</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>RAM (Memory)</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Storage (HDD, SSD)</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Power Supplies</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>PC Cases</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>UPS</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Cooling Solutions</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Keyboards</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Mice</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Monitors</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Gaming Chairs</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Headphones</Text>
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryTitle}>Cables</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  category: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
  },
});

export default Category;
