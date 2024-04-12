import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import COLORS from "../constants/colors"; // Import your color constants

const Favourite = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, source: require("../assets/nanaaan.jpg") },
    { id: 2, source: require("../assets/catsPICS/processor2.jpg") },
    { id: 3, source: require("../assets/catsPICS/processor1.jpg") },
    // Add more favorite photos as needed
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((photo) => photo.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites.map((photo) => (
        <TouchableOpacity
          key={photo.id}
          onPress={() => removeFavorite(photo.id)}
          style={styles.photoContainer}
        >
          <Image source={photo.source} style={styles.photo} />
        </TouchableOpacity>
      ))}
      {favorites.length === 0 && (
        <Text style={styles.emptyMessage}>No favorites yet.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.text,
  },
  photoContainer: {
    marginBottom: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  emptyMessage: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 20,
    color: COLORS.textLight,
  },
});

export default Favourite;