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
import {
  fetchHotelData,
  fetchHotelId,
  fetchHotelPop,
  getAllHotel,
} from "../redux/slices/hotelSlice";
import { ROUTES } from "../constants";
import CardResultComponent from "../components/Cards/CardResultComponent";

function ExploreScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const hotels = useSelector(getAllHotel);
  const idHotels = useSelector((state) => state.hotels.top);
  const popHotels = useSelector((state) => state.hotels.pop);

  useEffect(() => {
    dispatch(fetchHotelData());
    dispatch(fetchHotelId());
    dispatch(fetchHotelPop());
    console.log(popHotels);
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
                <TopDestinationsComponent hotels={idHotels} />
                <PopularDestinationsComponent hotels={popHotels} />
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
