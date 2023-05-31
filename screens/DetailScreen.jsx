import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ROUTES } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

function DetailScreen({ route }) {
  // const { destination } = route.params;
  const navigation = useNavigation();
  // const route = useRoute();
  const data = route?.params?.param;

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleCheck = () => {
    if (isAuthenticated) {
      // Navigasi ke halaman Booking jika pengguna telah login
      navigation.navigate(ROUTES.BOOK);
    } else {
      // Navigasi ke halaman Login jika pengguna belum login
      navigation.navigate(ROUTES.LOGIN);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView className="bg-white">
        <Image
          source={{
            uri: data?.photo?.images?.large?.url
              ? data?.photo?.images?.large?.url
              : "../../assets/sumba.jpg",
          }}
          className="w-full h-64"
          resizeMode="cover"
        />
        <View className="flex-row absolute inset-x-0 top-8 px-6 justify-between">
          <TouchableOpacity
            className="w-8 h-8 rounded-md items-center justify-center bg-white"
            onPress={() => navigation.navigate(ROUTES.EXPLORE)}
          >
            <AntDesign name="left" size={24} color="#0d9488" />
          </TouchableOpacity>
          <TouchableOpacity className="w-8 h-8 rounded-md items-center justify-center bg-white">
            <Icon name="heart-o" size={24} color="#0d9488" />
          </TouchableOpacity>
        </View>
        <View className="absolute flex-row justify-between inset-x-0 top-[200px] px-6">
          <View className="flex-row items-center">
            <Text className="text-2xl font-bold text-[#78e8de]">
              {data?.price}
            </Text>
          </View>
        </View>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-2 text-[#0d9488]">
            {data?.name}
          </Text>
          <View className="flex-row">
            <Fontisto name="map-marker-alt" size={18} color="gray" />
            <Text className="ml-2 text-gray-500 mb-4">
              {data?.location_string}
            </Text>
          </View>
          <View className="mt-4 flex-row items-center justify-between">
            {data?.rating && (
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <MaterialIcons name="star-rate" size={24} color="#0d9488" />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.rating}</Text>
                  <Text className="text-gray-600">Ratings</Text>
                </View>
              </View>
            )}
            {data?.price_level && (
              <View className="flex-row items-center ">
                <View className="w-12 h-12 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <MaterialIcons
                    name="attach-money"
                    size={24}
                    color="#0d9488"
                  />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.price_level}</Text>
                  <Text className="text-gray-600">Price Level</Text>
                </View>
              </View>
            )}
            {data?.bearing && (
              <View className="flex-row items-center ">
                <View className="w-12 h-12 rounded-2xl mr-2 bg-green-100 items-center justify-center shadow-md">
                  <FontAwesome name="map-signs" size={24} color="#0d9488" />
                </View>
                <View>
                  <Text className="text-gray-600">{data?.bearing}</Text>
                  <Text className="text-gray-600">Bearing</Text>
                </View>
              </View>
            )}
          </View>
          <Text className="text-gray-700 my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
            diam metus, ac commodo justo convallis ut. Integer sed vestibulum
            odio. Nullam a dui tellus. Proin vitae turpis consequat, commodo
            justo et, tempor libero. Quisque nec tellus elementum.
          </Text>
          <View className="mt-4 bg-gray-100 rounded-2xl px-4 py-2">
            {data?.phone && (
              <View className="items-center flex-row mt-2">
                <FontAwesome name="phone" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">{data?.phone}</Text>
              </View>
            )}
            {data?.email && (
              <View className="items-center flex-row mt-2">
                <FontAwesome name="envelope" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">{data?.email}</Text>
              </View>
            )}
            {data?.address && (
              <View className="items-center flex-row mt-2">
                <FontAwesome name="map-pin" size={24} color="#0d9488" />
                <Text className="ml-2 text-lg">{data?.address}</Text>
              </View>
            )}
            <TouchableOpacity
              className="mt-4 px-4 py-4 rounded-lg bg-[#0d9488] items-center justify-center"
              onPress={handleCheck}
              // onPress={() => navigation.navigate(ROUTES.BOOK)}
            >
              <Text className="text-2xl font-semibold uppercase tracking-wider text-gray-100">
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* <Text style={styles.title}>{route.params.userId}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
});

export default DetailScreen;
