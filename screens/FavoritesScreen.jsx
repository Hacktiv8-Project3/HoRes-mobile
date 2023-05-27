import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import CardFavComponent from "../components/Cards/CardFavComponent";

function FavoritesScreen() {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <ScrollView contentContainerStyle={tw`p-4`}>
          <CardFavComponent
            image={require("../assets/sumba.jpg")}
            title="Beautiful Apartment"
          />
          <CardFavComponent
            image={require("../assets/sumba.jpg")}
            title="Luxury Villa"
          />
          <CardFavComponent
            image={require("../assets/sumba.jpg")}
            title="Cozy Cabin"
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default FavoritesScreen;
