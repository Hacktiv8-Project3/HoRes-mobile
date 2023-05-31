import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { setToken, setUser, setPrevScreen } from "../redux/slices/authSlice";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "abc@gmail.com" && password === "abc123") {
      const token = "dummy-token";

      const user = {
        firstName: "namasaya",
        lastName: "abc",
        email: email,
        gender: "male",
      };

      await SecureStore.setItemAsync("token", token);

      dispatch(setToken(token));
      dispatch(setUser(user));

      // const prevScreen = useSelector((state) => state.auth.prevScreen);

      // if (prevScreen) {
      //   navigation.navigate(prevScreen);
      // } else {
      //   navigation.navigate(ROUTES.EXPLORE);
      // }
    } else {
      // Jika username atau password tidak valid, tampilkan pesan error
      console.log("Email atau password salah");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          className="border-b-2 border-[#0d9488] py-2 px-4 mb-4 text-gray-700"
          placeholder="Email"
          placeholderTextColor="#A0AEC0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          className="border-b-2 border-[#0d9488] py-2 px-4 mb-4 text-gray-700"
          placeholder="Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          className="bg-[#0d9488] py-3 rounded"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  form: {
    width: "100%",
  },
});

export default LoginScreen;
