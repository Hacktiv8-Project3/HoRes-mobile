import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import { ROUTES } from "../constants";

function ProfileScreen() {
  const navigation = useNavigation();
  const userData = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const bookings = useSelector((state) => state.booking.bookingsData);
  // Filter data booking berdasarkan pengguna yang login
  // const userBookings = bookings.filter(
  //   (booking) => booking?.email === userData?.email
  // );
  // console.log("ini userbooking", bookings);
  return (
    <>
      {isAuthenticated ? (
        <ScrollView>
          <View className="p-4">
            <View className="flex-row bg-white mb-2 rounded-lg">
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
              {/* <BookingItem item={bookings} /> */}

              {bookings?.length > 0 ? (
                <>
                  {bookings.map((item, index) => (
                    <View
                      key={index}
                      className="flex-row bg-white rounded-lg shadow space-x-2 p-4 mb-4"
                    >
                      <View>
                        <Image
                          source={{ uri: item?.hotel?.url_1440 }}
                          className="w-[90px] h-[90px] rounded-md"
                          resizeMode="cover"
                        />
                      </View>
                      <View className="justify-center">
                        <Text className="text-lg font-bold mb-2">
                          {item?.hotel?.name.length > 20
                            ? `${item?.hotel?.name?.slice(0, 14)}..`
                            : item?.hotel?.name}
                        </Text>
                        <Text className="text-gray-500 mb-2">
                          {item?.hotel?.city} , {item?.hotel?.country}
                        </Text>
                      </View>
                      <View className="absolute top-10 left-[290px]">
                        <Text className="font-bold text-2xl text-[#0d9488]">
                          $ {item?.hotel?.price}
                        </Text>
                        <Text className="text-gray-500">/per night</Text>
                      </View>
                    </View>
                  ))}
                </>
              ) : (
                <></>
              )}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 justify-center items-center ">
          <TouchableOpacity
            className="py-3 rounded w-[80%]"
            onPress={() => navigation.navigate(ROUTES.LOGIN)}
          >
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
      )}
    </>
  );
}

export default ProfileScreen;
