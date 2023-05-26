import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import PopularDestinationsComponent from "../components/Cards/PopularDestinationsComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import TopDestinationsComponent from "../components/Cards/TopDestinationsComponent";

function ExploreScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw`p-4`}>
        {/* {isLoading ? (
          <View style={tw`flex-1 items-center justify-center`}>
            <ActivityIndicator size="large" color="#0d9488" />
          </View>
        ) : (
          <View></View>
        )} */}
        <SearchBarComponent />
        <TopDestinationsComponent />
        <PopularDestinationsComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExploreScreen;
