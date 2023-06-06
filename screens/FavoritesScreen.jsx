import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import CardFavComponent from "../components/Cards/CardFavComponent";

function FavoritesScreen() {
  const favData = useSelector((state) => state.favorites.favorites);
  console.log(favData);
  return (
    <View className="flex-1">
      <View className="flex-1 bg-gray-100">
        <ScrollView contentContainer className="p-4">
          <CardFavComponent favData={favData} />
        </ScrollView>
        {/*  */}
      </View>
    </View>
  );
}

export default FavoritesScreen;
