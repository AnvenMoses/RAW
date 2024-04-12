import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductDetails = ({ route }) => {
  const { productName, productDescription, productImage } = route.params;

  return (
    <View style={styles.container}>
      <Image source={productImage} style={styles.image} />
      <Text style={styles.name}>{productName}</Text>
      <Text style={styles.description}>{productDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductDetails;