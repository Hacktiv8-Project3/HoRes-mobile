import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ROUTES } from "../../constants";

const CardResultComponent = ({ hotels }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 bg-white">
        <Text className="text-2xl font-bold py-4">All Destinations</Text>
        {hotels.map((destination, idx) => (
          <TouchableOpacity
            className="bg-white rounded-lg shadow mb-4"
            key={idx}
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
            <View className="justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full">
              <Icon name="heart-o" size={20} color="#0d9488" />
            </View>
            <View className="flex-row p-4 justify-between">
              <View className="w-60">
                <Text className="text-lg font-bold mb-2">
                  {destination.name?.length > 14
                    ? `${destination?.name?.slice(0, 14)}..`
                    : destination.name}
                </Text>
                <Text className="text-gray-500">Lorem</Text>
              </View>
              <View className="p-4">
                <Text className="font-bold text-2xl text-[#0d9488]">
                  $ {destination?.price}
                </Text>
                <Text className="text-gray-500">/per night</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CardResultComponent;
