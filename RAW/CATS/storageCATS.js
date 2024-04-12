import * as React from "react";
import {View,Image,StyleSheet,Text,FlatList,ScrollView,TouchableOpacity,Windows,Dimensions,} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";

import Logos from "../assets/RAWLOGO.jpg";

const { width } = Dimensions.get("window");

function storageCATS() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image source={Logos} style={styles.logo} />
        <View style={styles.photoGrid}>
          <Image
            source={require('../assets/catsPICS/processor1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/catsPICS/processor1.jpg')}
            style={styles.image}
          />
        </View>
      </ScrollView>
    );
  }

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

export default storageCATS;