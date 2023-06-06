import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { ROUTES } from "../../constants";
import { addFav, removeFav } from "../../redux/slices/favSlice";
import CardItem from "./CardItem";

const CardResultComponent = ({ hotels }) => {
  const dispatch = useDispatch();
  const favData = useSelector((state) => state.favorites.favorites);

  const handleFavoriteClick = (item) => {
    dispatch(addFav(item));
  };

  const handleUnFavoriteClick = (item) => {
    dispatch(removeFav(item?.name));
  };
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1 bg-white">
        <Text className="text-2xl font-bold py-4">All Destinations</Text>
        {hotels.map((destination, idx) => {
          const isFavorite = favData.find(
            (fav) => fav.name === destination.name
          );
          let button;
          if (isFavorite) {
            button = (
              <TouchableOpacity
                className="justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full"
                onPress={() => handleUnFavoriteClick(destination)}
              >
                <Icon name="heart" size={20} color="#0d9488" />
              </TouchableOpacity>
            );
          } else {
            button = (
              <TouchableOpacity
                className="justify-center items-center w-8 h-8 bg-white absolute top-5 right-5 rounded-full"
                onPress={() => handleFavoriteClick(destination)}
              >
                <Icon name="heart-o" size={20} color="#0d9488" />
              </TouchableOpacity>
            );
          }
          return (
            <CardItem destination={destination} button={button} key={idx} />
          );
        })}
      </View>
    </View>
  );
};

export default CardResultComponent;
