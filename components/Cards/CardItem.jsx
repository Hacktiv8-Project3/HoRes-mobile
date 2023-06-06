import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ROUTES } from "../../constants";

const CardItem = ({ destination, button }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        className="bg-white rounded-lg shadow mb-4 shadow-black"
        onPress={() =>
          navigation.navigate(ROUTES.DETAIL, { param: destination })
        }
      >
        <Image
          source={{
            uri: destination?.url_1440
              ? destination?.url_1440
              : "../../assets/sumba.jpg",
          }}
          className="w-full h-48 rounded-t-lg"
        />

        {button}

        <View className="flex-row p-4 justify-between items-center">
          <View className="w-60">
            <Text className="text-lg font-bold mb-2">
              {destination.name?.length > 14
                ? `${destination?.name?.slice(0, 14)}..`
                : destination.name}
            </Text>
            <Text className="text-gray-500">
              {destination.hotel_description?.length > 35
                ? `${destination?.hotel_description?.slice(0, 35)}..`
                : destination.hotel_description}
            </Text>
          </View>
          <View className="p-4">
            <Text className="font-bold text-2xl text-[#0d9488]">
              $ {destination?.price}
            </Text>
            <Text className="text-gray-500">/per night</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;
