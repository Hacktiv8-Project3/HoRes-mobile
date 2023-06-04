import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "../../screens/DetailScreen";
import NavbarComponent from "./NavbarComponent";
import { ROUTES } from "../../constants";
import LoginScreen from "../../screens/LoginScreen";
import BookingScreen from "../../screens/BookingScreen";
import SearchScreen from "../../screens/SearchScreen";
import AccountScreen from "../../screens/AccountScreen";
import { useDispatch, useSelector } from "react-redux";
import { setPrevScreen } from "../../redux/slices/authSlice";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createStackNavigator();

const NavigateComponent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const prevScreen = useSelector((state) => state.auth.prevScreen);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     // Set prevScreen ke null saat membuka aplikasi
  //     dispatch(setPrevScreen(null));
  //   }
  // }, [isAuthenticated, dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
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
      initialRouteName={ROUTES.EXPLORE}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name={ROUTES.BOOK}
            component={BookingScreen}
            options={{
              headerShown: true,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        </>
      )}
      <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
      <Stack.Screen
        name={ROUTES.DETAIL}
        component={DetailScreen}
        option={({ route }) => ({
          title: route.params.userId,
        })}
      />
      <Stack.Screen name={ROUTES.EXPLORE} component={NavbarComponent} />

      <Stack.Screen 
        name={ROUTES.ACCOUNT} 
        component={AccountScreen} 
        options={{ 
          headerShown:true,
          headerStyle: {
            backgroundColor: "#0d9488"
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center', 
        }}
      />
    </Stack.Navigator>
  );
};

export default NavigateComponent;
