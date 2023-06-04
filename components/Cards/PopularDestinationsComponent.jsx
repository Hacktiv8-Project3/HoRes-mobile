import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, ScrollView, Text, Image } from "react-native";
import { ROUTES } from "../../constants";

function PopularDestinationsComponent({ hotels }) {
  const navigation = useNavigation();
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 bg-white">
        <Text className="text-2xl font-bold py-4">Popular Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hotels.map((destination, idx) => (
            <TouchableOpacity
              key={idx}
              className="mr-4 rounded-xl"
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
                className="w-40 h-24 rounded-t-xl"
              />
              <View className="px-2 py-2">
                <Text className="text-black text-lg font-semibold">
                  {destination.name?.length > 14
                    ? `${destination?.name?.slice(0, 14)}..`
                    : destination.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default PopularDestinationsComponent;
