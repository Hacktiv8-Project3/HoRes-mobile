import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { ROUTES } from "../../constants";

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
];

const TopDestinationsComponent = () => {
  const navigation = useNavigation();
  // const goToDetail = (destination) => {
  //   // Navigasi ke halaman detail dengan data destinasi
  //   navigation.navigate("Detail", { destination });
  //};
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <View style={tw`flex-1 bg-white pl-4`}>
        <Text style={tw`text-2xl font-bold py-4`}>Top Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {destinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
              style={tw`mr-4 rounded-xl`}
              onPress={() =>
                navigation.navigate(ROUTES.DETAIL, { userId: "xx1" })
              }
            >
              <ImageBackground
                source={destination.image}
                style={tw`w-40 h-24 rounded-xl`}
                resizeMode="cover"
              >
                <View
                  style={tw`flex-1 justify-end  px-2 py-2 bg-opacity-100 rounded-lg`}
                >
                  <Text style={tw`text-white text-lg font-semibold`}>
                    {destination.name}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TopDestinationsComponent;
