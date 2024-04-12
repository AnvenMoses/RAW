import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import COLORS from "../constants/colors"; // Import your color constants

const Categories = [
  { id: 1, name: "Processors", image: require("../assets/CTGYimgs/processorCTGY.jpg") },
  { id: 2, name: "Graphics Cards", image: require("../assets/CTGYimgs/graphicscardCTGY.jpg") },
  { id: 3, name: "Motherboards", image: require("../assets/CTGYimgs/motherboardsCTGY.jpg") },
  { id: 4, name: "RAM(Memory)", image: require("../assets/CTGYimgs/memoryCTGY.jpg") },
  { id: 5, name: "Storage", image: require("../assets/CTGYimgs/ssdCTGY.jpg") },
  { id: 6, name: "Power Supplies", image: require("../assets/CTGYimgs/powersupplyCTGY.jpg") },
  { id: 7, name: "UPS", image: require("../assets/CTGYimgs/upsCTGY.jpg") },
  { id: 8, name: "Keyboards", image: require("../assets/CTGYimgs/keyboardCTGY.jpg") },
  { id: 9, name: "Mice", image: require("../assets/CTGYimgs/mouseCTGY.jpg") },
  { id: 10, name: "Monitors", image: require("../assets/CTGYimgs/monitorCTGY.jpg") },
  { id: 11, name: "PC Cases", image: require("../assets/CTGYimgs/pccaseCTGY.jpg") },
  { id: 12, name: "AVR", image: require("../assets/CTGYimgs/avrCTGY.jpg") },
  { id: 13, name: "Headphones", image: require("../assets/CTGYimgs/headphonesCTGY.jpg") },
  { id: 14, name: "Chassis Fan", image: require("../assets/CTGYimgs/cfanCTGY.jpg") },
];

const Category = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate("processorCATS", { category: item.id })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: COLORS.primary,
  },
  flatListContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  categoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: COLORS.secondary,
  },
});

export default Category;