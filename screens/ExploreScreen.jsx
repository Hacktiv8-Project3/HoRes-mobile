import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../redux/slices/authSlice";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import PopularDestinationsComponent from "../components/Cards/PopularDestinationsComponent";
import SearchBarComponent from "../components/SearchBarComponent";
import TopDestinationsComponent from "../components/Cards/TopDestinationsComponent";
import { fetchHotelData, getAllHotel } from "../redux/slices/hotelSlice";
import { ROUTES } from "../constants";
import CardResultComponent from "../components/Cards/CardResultComponent";

function ExploreScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const hotels = useSelector(getAllHotel);

  useEffect(() => {
    dispatch(fetchHotelData());
    // console.log(hotels);
  }, [dispatch]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0d9488" />
          </View>
        ) : (
          <View>
            {hotels?.length > 0 ? (
              <>
                <SearchBarComponent />
                <TopDestinationsComponent hotels={hotels} />
                <PopularDestinationsComponent hotels={hotels} />
                <CardResultComponent hotels={hotels} />
              </>
            ) : (
              <></>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExploreScreen;
