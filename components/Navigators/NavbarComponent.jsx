import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import ExploreScreen from "../../screens/ExploreScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import { LinearGradient } from "expo-linear-gradient";
import { ROUTES } from "../../constants";

const Tab = createBottomTabNavigator();

const NavbarComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={{
        tabBarActiveTintColor: "#0d9488",
        headerTintColor: "#fff",
        // headerBackTitle: "Back",
        headerStyle: {
          backgroundColor: "#0d9488",
        },
        headerTitleAlign: "center",
        headerBackground: () => (
          <LinearGradient
            colors={["#0d9488", "#ffff00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 4, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name={ROUTES.EXPLORETAB}
        component={ExploreScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavbarComponent;
