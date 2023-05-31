import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CardResultComponent = ({ image, title }) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 bg-white">
        <Text className="text-2xl font-bold py-4">All Destination</Text>
        <TouchableOpacity className="bg-white rounded-lg shadow mb-4">
          <Image source={image} className="w-full h-48 rounded-t-lg" />
          <View className="justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full">
            <Icon name="heart-o" size={20} color="#0d9488" />
          </View>
          <View className="flex-row p-4 justify-between">
            <View className="w-60">
              <Text className="text-lg font-bold mb-2">{title}</Text>
              <Text className="text-gray-500">Lorem</Text>
            </View>
            <View className="p-4">
              <Text className="font-bold text-2xl text-[#0d9488]">$ 200</Text>
              <Text className="text-gray-500">/per night</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardResultComponent;
