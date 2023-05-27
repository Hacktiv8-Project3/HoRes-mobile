import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/FontAwesome";

const CardResultComponent = ({ image, title }) => {
  return (
    <TouchableOpacity style={tw`bg-white rounded-lg shadow mb-4`}>
      <Image source={image} style={tw`w-full h-48 rounded-t-lg`} />
      <View
        style={tw`justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full`}
      >
        <Icon name="heart-o" size={20} color="green" />
      </View>
      <View style={tw`flex-row p-4 justify-between`}>
        <View style={tw`w-60`}>
          <Text style={tw`text-lg font-bold mb-2`}>{title}</Text>
          <Text style={tw`text-gray-500`}>Lorem</Text>
        </View>
        <View style={tw`p-4`}>
          <Text style={tw`font-bold text-2xl text-green-500`}>$ 200</Text>
          <Text style={tw`text-gray-500`}>/per night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardResultComponent;
