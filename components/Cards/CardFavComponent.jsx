import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

function CardFavComponent({ image, title }) {
  return (
    <TouchableOpacity style={tw`bg-white rounded-lg shadow mb-4`}>
      <Image source={image} style={tw`w-full h-48 rounded-t-lg`} />
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-bold mb-2`}>{title}</Text>
        <Text style={tw`text-gray-500`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardFavComponent;
