import React from "react";
import { View, ScrollView, Text, Image } from "react-native";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: require("../../assets/sumba.jpg"),
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: require("../../assets/sumba.jpg"),
  },
  {
    id: 3,
    name: "New York, USA",
    image: require("../../assets/sumba.jpg"),
  },
  // Tambahkan destinasi lainnya di sini
];

function PopularDestinationsComponent() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 bg-white pl-4">
        <Text className="text-2xl font-bold py-4">Popular Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destinations.map((destination) => (
            <View key={destination.id} className="mr-4">
              <Image
                source={destination.image}
                className="w-40 h-24 rounded-t-xl"
              />
              <View className="px-2 py-2">
                <Text className="text-black text-lg font-semibold">
                  {destination.name}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default PopularDestinationsComponent;
