import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import CardResultComponent from "../components/Cards/CardResultComponent";

const SearchScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <ScrollView contentContainerStyle={tw`p-4`}>
          <CardResultComponent
            image={require("../assets/sumba.jpg")}
            title="Beautiful Apartment"
          />
          <CardResultComponent
            image={require("../assets/sumba.jpg")}
            title="Luxury Villa"
          />
          <CardResultComponent
            image={require("../assets/sumba.jpg")}
            title="Cozy Cabin"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;
