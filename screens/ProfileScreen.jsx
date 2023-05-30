import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";

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
            <Text className="text-2xl font-bold">John Doe</Text>
            <Text className="text-gray-500 mb-4">john.doe@example.com</Text>
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
  );
}

export default ProfileScreen;
