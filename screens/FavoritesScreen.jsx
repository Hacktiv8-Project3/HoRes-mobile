import React from "react";
import { View, Text, ScrollView } from "react-native";
import CardFavComponent from "../components/Cards/CardFavComponent";

function FavoritesScreen() {
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray-100">
        <ScrollView contentContainer className="p-4">
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
