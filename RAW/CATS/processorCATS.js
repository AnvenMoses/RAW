import React from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const processorCATS = ({ route }) => {
  const { category } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={require("../assets/RAWLOGO.jpg")} style={styles.logo} />
      <View style={styles.photoGrid}>
        <Image
          source={require("../assets/catsPICS/processor1.jpg")}
          style={styles.image}
        />
        <Image
          source={require("../assets/catsPICS/processor2.jpg")}
          style={styles.image}
        />
        {/* Add more images here as needed */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  logo: {
    width: width,
    height: 50,
    resizeMode: "contain",
  },
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  image: {
    width: width / 2 - 10,
    height: width / 2 - 10,
    marginVertical: 5,
    resizeMode: "cover",
  },
});

export default processorCATS;