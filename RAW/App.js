/* Reynan Jhay A. Busano, Anven Moses L. Agbulos, Wyne Khristian B. Ipanag
   IT73/IT35B - Application Development */

   import React from "react";
   import { NavigationContainer } from "@react-navigation/native";
   import { createNativeStackNavigator } from "@react-navigation/native-stack";
   import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
   import { createDrawerNavigator } from "@react-navigation/drawer";
   
   import Homepage from "./pages/Homepage";
   import Loginpage from "./pages/Loginpage";
   import Registrationpage from "./pages/Registrationpage";
   import AccRecoverypage from "./pages/AccRecoverypage";
   
   import Landingpage from "./pages/Landingpage";
   import FilterScreen from "./screens/Filters";
   import AboutusScreen from "./screens/Aboutus";
   import ContactScreen from "./screens/Contact";
   
   import CategoryScreen from './screens/Category';
   import FavouritesScreen from "./screens/Favourite";
   
   import { Ionicons } from "@expo/vector-icons";
   import COLORS from "./constants/colors";
   
   const Drawer = createDrawerNavigator();
   const Stack = createNativeStackNavigator();
   const Tab = createMaterialBottomTabNavigator();
   
   const tabIcons = {
     HOME: 'home-outline',
     CATEGORY: 'list-outline',
     FAVOURITE: 'heart-outline',
   };
   
   const tabLabelStyle = {
     fontFamily: 'Montserrat_400Regular',
   };
   
   const drawerLabelStyle = {
     fontFamily: 'Montserrat_400Regular',
   };
   
   export default function App() {
     return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home" component={Homepage}options={{ headerShown: false }} />
           <Stack.Screen name="Login" component={Loginpage} />
           <Stack.Screen name="Register" component={Registrationpage} />
           <Stack.Screen name="AccRecovery" component={AccRecoverypage} />
           <Stack.Screen name="Landing" component={sidedrawer} options={{ headerShown: false}}/>
         </Stack.Navigator>
       </NavigationContainer>
     );
   }
   
   function sidedrawer() {
     return (
       <Drawer.Navigator
         screenOptions={{
           drawerStyle: { backgroundColor: COLORS.secondary },
           drawerActiveTintColor: COLORS.white,
           drawerInactiveTintColor: COLORS.black,
           drawerLabelStyle,
         }}
       >
         <Drawer.Screen
           name="Home"
           component={bottomtabs}
           options={{
             drawerIcon: ({ color }) => (
               <Ionicons name="home-outline" size={24} color={color} />
             ),
           }}
         />
         <Drawer.Screen
           name="Products"
           component={CategoryScreen}
           options={{
             drawerIcon: ({ color }) => (
               <Ionicons name="list-outline" size={24} color={color} />
             ),
           }}
         />
         <Drawer.Screen
           name="Filters"
           component={FilterScreen}
           options={{
             drawerIcon: ({ color }) => (
               <Ionicons name="filter-outline" size={24} color={color} />
             ),
           }}
         />
         <Drawer.Screen
           name="About Us"
           component={AboutusScreen}
           options={{
             drawerIcon: ({ color }) => (
               <Ionicons name="information-circle-outline" size={24} color={color} />
             ),
           }}
         />
         <Drawer.Screen
           name="Contact"
           component={ContactScreen}
           options={{
             drawerIcon: ({ color }) => (
               <Ionicons name="mail-outline" size={24} color={color} />
             ),
           }}
         />
       </Drawer.Navigator>
     );
   }
   
   function bottomtabs() {
     return (
       <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarIcon: ({ color }) => {
             const iconName = tabIcons[route.name];
             return <Ionicons name={iconName} size={24} color={color} />;
           },
           tabBarLabelStyle: tabLabelStyle,
         })}
         tabBarOptions={{
           activeTintColor: COLORS.primary,
           inactiveTintColor: COLORS.black,
         }}
       >
         <Tab.Screen name="HOME" component={Landingpage} />
         <Tab.Screen name="CATEGORY" component={CategoryScreen} />
         <Tab.Screen name="FAVOURITE" component={FavouritesScreen} />
       </Tab.Navigator>
     );
   }
   