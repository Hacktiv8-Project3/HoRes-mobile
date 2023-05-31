import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>BookingScreen</Text>
    </SafeAreaView>
  );
};

export default BookingScreen;
