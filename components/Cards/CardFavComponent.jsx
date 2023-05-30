import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function CardFavComponent({ image, title }) {
  return (
    <TouchableOpacity className="bg-white rounded-lg shadow mb-4">
      <Image source={image} className="w-full h-48 rounded-t-lg" />
      <View className="justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full">
        <Icon name="heart-o" size={20} color="green" />
      </View>
      <View className="flex-row p-4 justify-between">
        <View className="w-60">
          <Text className="text-lg font-bold mb-2">{title}</Text>
          <Text className="text-gray-500">Lorem</Text>
        </View>
        <View className="p-4">
          <Text className="font-bold text-2xl text-green-500">$ 200</Text>
          <Text className="text-gray-500">/per night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CardFavComponent;
