import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { ROUTES } from "../constants";

const bookings = [
  {
    id: "1",
    name: "Apartment 1",
    checkIn: "2023-05-01",
    checkOut: "2023-05-05",
  },
  { id: "2", name: "Villa 2", checkIn: "2023-06-10", checkOut: "2023-06-15" },
  { id: "3", name: "Cabin 3", checkIn: "2023-07-20", checkOut: "2023-07-25" },
];

function ProfileScreen() {
  const navigation = useNavigation();
  const userData = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // console.log(userData);
  const renderBookingItem = ({ item }) => (
    <View className="bg-white rounded-lg shadow p-4 mb-4">
      <Text className="text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-gray-500 mb-2">
        {item.checkIn} - {item.checkOut}
      </Text>
      <Text className="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </View>
  );
  return (
    <>
      {isAuthenticated ? (
        <View>
          <View className="p-4">
            <View className="flex-row bg-white mb-2">
              <View>
                <Image
                  source={require("../assets/avatar.png")}
                  className="w-24 h-24 rounded-full mb-4 m-4"
                />
              </View>
              <View className="justify-center px-4">
                <View className="flex-row space-x-2">
                  <Text className="text-2xl font-bold">
                    {userData?.firstName}
                  </Text>
                  <Text className="text-2xl font-bold">
                    {userData?.lastName}
                  </Text>
                </View>
                <Text className="text-gray-500 mb-4">{userData?.email}</Text>
              </View>
            </View>
            <View>
              <Text className="text-lg mb-2">Booking History</Text>
              <FlatList
                data={bookings}
                renderItem={renderBookingItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      ) : (
        <View className="flex-1 justify-center items-center ">
          <TouchableOpacity
            className="bg-[#0d9488] py-3 rounded w-[100%]"
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
            <Text className="text-white text-center font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

export default ProfileScreen;
