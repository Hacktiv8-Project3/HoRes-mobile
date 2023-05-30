import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../../screens/DetailScreen";
import NavbarComponent from "./NavbarComponent";
import { ROUTES } from "../../constants";
import LoginScreen from "../../screens/LoginScreen";
import BookingScreen from "../../screens/BookingScreen";
import SearchScreen from "../../screens/SearchScreen";

const Stack = createStackNavigator();

const NavigateComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
      initialRouteName={ROUTES.EXPLORE}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.EXPLORE} component={NavbarComponent} />
      <Stack.Screen name={ROUTES.BOOK} component={BookingScreen} />
      <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
      <Stack.Screen
        name={ROUTES.DETAIL}
        component={DetailScreen}
        option={({ route }) => ({
          title: route.params.userId,
        })}
      />
    </Stack.Navigator>
  );
};

export default NavigateComponent;
