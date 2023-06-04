import React from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
// import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/Ionicons";
import { ROUTES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../redux/slices/authSlice";
import * as SecureStore from "expo-secure-store";


const SettingScreen = () => {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    // Hapus token dari penyimpanan aman (secure storage)
    await SecureStore.deleteItemAsync("token");

    // Hapus token dan data pengguna dari Redux state
    dispatch(clearToken());
  };

  return (
    <>
    <View className="flex flex-wrap">
      <View className="w-full p-4">
        <View className="bg-white rounded-xl shadow-lg overflow-hidden mb-3 p-4">
              <View className="flex-row justify-between pb-3">
                <Text className="text-lg font-bold">MY ACCOUNT</Text>
                <TouchableHighlight onPress={() => navigation.navigate(ROUTES.ACCOUNT)} underlayColor="#e0e0e0">
                  <Text className="content-center pt-1" style={{color:"#0d9488"}}>Edit</Text>
                </TouchableHighlight>
              </View>

            {/* <View className="divide-y divide-gray-800"> */}
              <View className="flex-row justify-between py-4"> 
                <Text>First Name</Text>
                <Text className="opacity-70">{userData?.firstName}</Text>
              </View>
              <View className="flex-row justify-between py-4"> 
                <Text>last Name</Text>
                <Text className="opacity-70">{userData?.lastName}</Text>
              </View>
              <View className="flex-row justify-between py-4">
                <Text>Email</Text>
                <Text className="opacity-70">{userData?.email}</Text>
              </View>
              <View className="flex-row justify-between py-4">
                <Text>Gender</Text>
                <Text className="opacity-70">{userData?.gender}</Text>
              </View>
            {/* </View> */}
        </View>

        <View className="bg-white rounded-xl shadow-lg overflow-hidden mb-3 p-4">
          <Text className="text-lg font-bold mb-3">SUPPORT</Text>
              <View className="flex-row justify-between py-4">
                <Text>Search History</Text>
              </View>
              
            <View className="py-4">
              {!isAuthenticated ? (
              <></>
              ) : (
              <TouchableOpacity onPress={handleLogout}>
                <Text className="text-rose-600">Log Out</Text>
              </TouchableOpacity>
              )}
            </View>
        </View>

      </View>

    </View>

  </>
  );
}

export default SettingScreen;
