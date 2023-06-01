import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";
// import SelectDropdown from "react-native-select-dropdown";

const BookingScreen = () => {
  const navigation = useNavigation();
  const countryCode = ["+60", "+61", "+62"]

  return (
    <SafeAreaView>
      <View className="p-5">
        <Text className="text-slate-800 font-bold tracking-widest">
          CONTACT INFORMATIONS
        </Text>
        <TextInput
          className="py-2 px-3 mt-5 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl truncate"
          placeholder="Input your name"
          placeholderTextColor="#C9C9C9"
          value="Fendy Sanjaya"
          onChangeText=""
        />
        <TextInput
          className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl truncate"
          placeholder="Input your email"
          placeholderTextColor="#C9C9C9"
          value="fendysanjaya40@gmail.com"
          onChangeText=""
          autoComplete="email"
        />
        <View className="flex-row">
          {/* <SelectDropdown 
          data={countryCode}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          /> */}
          <TextInput
            className="py-2 px-3 mb-4 mr-1 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl basis-1/3 truncate"
            placeholder="Phone number"
            placeholderTextColor="#C9C9C9"
            value={"+62"}
            maxLength={3}
            onChangeText=""
            keyboardType="phone-pad"
          />
          <TextInput
            className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl basis-[65%] truncate"
            placeholder="Phone number"
            placeholderTextColor="#C9C9C9"
            value="89804426969"
            maxLength={14}
            onChangeText=""
            keyboardType="phone-pad"
          />
        </View>
        <Text className="mt-7 text-slate-800 font-bold tracking-widest">
          PRICE SUMMARY
        </Text>
        <View className=" p-3 mt-3 mb-48 rounded-lg shadow-lg bg-white">
          <View className="flex flex-row">
            <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">3 days,</Text>
            <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">1 Room,</Text>
            <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">2 Guests</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-gray-500 font-bold tracking-wide mr-1">Total</Text>
            <Text className="text-[#0d9488] font-bold tracking-wide mr-1">	&#36; 534,87 </Text>
          </View>
          <View className="h-2 mb-3 mt-2 border-b-2 border-gray-100"></View>
          <View className="flex flex-row justify-between">
            <Text className="text-gray-500 font-bold tracking-wide mr-1">Payable Now</Text>
            <Text className="text-[#0d9488] font-bold tracking-wide mr-1">	&#36; 22,50 </Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-[#0d9488] py-3 rounded-full"
          onPress={() => navigation.navigate(ROUTES.PROFILE)}
        >
          <Text className="text-white text-center font-bold">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;