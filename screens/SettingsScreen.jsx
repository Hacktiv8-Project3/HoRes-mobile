import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../constants";
import { clearToken } from "../redux/slices/authSlice";
import * as SecureStore from "expo-secure-store";

function SettingScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.authenticated);

  const handleLogout = async () => {
    // Hapus token dari penyimpanan aman (secure storage)
    await SecureStore.deleteItemAsync("token");

    // Hapus token dan data pengguna dari Redux state
    dispatch(clearToken());
  };

  return (
    <>
      <View className="flex-1">
        {isAuthenticated ? (
          <></>
        ) : (
          <TouchableOpacity onPress={handleLogout}>
            <Text>logout</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

export default SettingScreen;
