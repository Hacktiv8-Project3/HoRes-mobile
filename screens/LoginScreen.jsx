import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          className="border-b-2 border-green-500 py-2 px-4 mb-4 text-gray-700"
          placeholder="Email"
          placeholderTextColor="#A0AEC0"
        />
        <TextInput
          className="border-b-2 border-green-500 py-2 px-4 mb-4 text-gray-700"
          placeholder="Password"
          placeholderTextColor="#A0AEC0"
          secureTextEntry
        />
        <TouchableOpacity className="bg-green-500 py-3 rounded">
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
