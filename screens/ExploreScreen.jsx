import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData, getAllHotel } from "../redux/slices/hotelSlice";

function ExploreScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  // const dispatch = useDispatch();
  // // // const { status, error, data } = useSelector((state) => state.hotels);
  // const hotels = useSelector(getAllHotel);

  // useEffect(() => {
  //   dispatch(fetchHotelData());
  //   // console.warn(hotels);
  // }, [dispatch]);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-4">
        {isLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#0d9488" />
          </View>
        ) : (
          <View>
            {/* {hotels?.length > 0 ? (
              <>
                <SearchBarComponent />
                <TopDestinationsComponent hotels={hotels} />
                <PopularDestinationsComponent />
              </>
            ) : (
              <PopularDestinationsComponent />
            )} */}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExploreScreen;
