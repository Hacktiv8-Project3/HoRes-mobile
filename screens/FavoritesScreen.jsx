import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import CardFavComponent from "../components/Cards/CardFavComponent";

function FavoritesScreen() {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <ScrollView contentContainerStyle={tw`p-4`}>
          <Text style={tw`text-2xl font-bold mb-4`}>Saved</Text>
          <CardFavComponent
            image={require("../assets/restaurants.png")}
            title="Beautiful Apartment"
          />
          <CardFavComponent
            image={require("../assets/restaurants.png")}
            title="Luxury Villa"
          />
          <CardFavComponent
            image={require("../assets/restaurants.png")}
            title="Cozy Cabin"
          />
          {/* Tambahkan card lainnya sesuai kebutuhan */}
        </ScrollView>
      </View>
    </View>
  );
}

export default FavoritesScreen;
