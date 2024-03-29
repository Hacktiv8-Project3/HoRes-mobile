import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser, setPrevScreen } from "../redux/slices/authSlice";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
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
      if (!userData?.email) {
        dispatch(setUser(user));
      } else {
      }
      dispatch(setToken(token));

      // const prevScreen = useSelector((state) => state.auth.prevScreen);

      // if (prevScreen) {
      //   navigation.navigate(prevScreen);
      // } else {
      //   navigation.navigate(ROUTES.EXPLORE);
      // }
    } else {
      // Jika username atau password tidak valid, tampilkan pesan error
      Alert.alert("Email atau password salah!", "Periksa kembali inputan Anda");
    }
  };

  return (
    <>
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
          <TouchableOpacity className="py-3 rounded-full" onPress={handleLogin}>
            <LinearGradient
              colors={["#0d9488", "#ffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 4, y: 0 }}
              style={{ padding: 10, borderRadius: 20 }}
            >
              <Text className="text-white text-center font-bold">Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  form: {
    width: "100%",
  },
});

export default LoginScreen;
