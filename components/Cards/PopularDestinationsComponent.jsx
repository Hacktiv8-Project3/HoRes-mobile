import React from "react";
import { View, ScrollView, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

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
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`flex-1 bg-white pl-4`}>
        <Text style={tw`text-2xl font-bold py-4`}>Popular Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destinations.map((destination) => (
            <View key={destination.id} style={tw`mr-4`}>
              <Image
                source={destination.image}
                style={tw`w-40 h-24 rounded-t-xl`}
              />
              <View style={tw`px-2 py-2`}>
                <Text style={tw`text-black text-lg font-semibold`}>
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
