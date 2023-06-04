import { View, Text } from "react-native";
import React from "react";

const BookingItem = ({ item }) => {
  return (
    <>
      {item.map((booking, index) => (
        <View
          key={index}
          className="flex-row bg-white rounded-lg shadow space-x-2 p-4 mb-4"
        >
          <View>
            <Image
              source={{ uri: booking?.hotel?.url_1440 }}
              className="w-[90px] h-[90px] rounded-md"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center">
            <Text className="text-lg font-bold mb-2">
              {booking?.hotel?.name}
            </Text>
            <Text className="text-gray-500 mb-2">
              {booking?.hotel?.city} , {booking?.hotel?.country}
            </Text>
          </View>
          <View className="justify-center">
            <Text className="font-bold text-2xl text-[#0d9488]">
              $ {booking?.hotel?.price}
            </Text>
            <Text className="text-gray-500">/per night</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default BookingItem;
