import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { saveBookingData } from "../redux/slices/bookingSlice";
import { LinearGradient } from "expo-linear-gradient";
// import SelectDropdown from "react-native-select-dropdown";

const BookingScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedHotel = useSelector((state) => state.booking.selectHotel);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [codePhone, setCodePhone] = useState("");
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState("");
  const [rooms, setRooms] = useState("");
  const [guests, setGuests] = useState("");

  const handleSaveBooking = () => {
    const newBookingData = {
      // ...bookingData,
      hotel: selectedHotel,
      name: name,
      email: email,
      codePhone: codePhone,
      phone: phone,
      days: days,
      rooms: rooms,
      guests: guests,
    };

    dispatch(saveBookingData(newBookingData));
    navigation.navigate(ROUTES.PROFILE);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-5">
          <Text className="text-slate-800 font-bold tracking-widest">
            CONTACT INFORMATIONS
          </Text>
          <TextInput
            className="py-2 px-3 mt-5 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl truncate"
            placeholder="Input your name"
            placeholderTextColor="#C9C9C9"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl truncate"
            placeholder="Input your email"
            placeholderTextColor="#C9C9C9"
            value={email}
            onChangeText={setEmail}
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
            {/* <Text className="mt-3 ml-2 mr-2 text-gray-700">+</Text> */}
            <TextInput
              className="py-2 px-3 mb-4 mr-1 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl basis-1/3 truncate"
              placeholder="+62"
              placeholderTextColor="#C9C9C9"
              value={codePhone}
              maxLength={3}
              onChangeText={setCodePhone}
              keyboardType="phone-pad"
            />
            <TextInput
              className="py-2 px-3 mb-4 text-gray-500 tracking-wide bg-white rounded-lg shadow-xl basis-[65%] truncate"
              placeholder="Phone number"
              placeholderTextColor="#C9C9C9"
              value={phone}
              maxLength={14}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
          </View>
          <View className="pt-2 pl-2 pr-2 flex flex-row items-start shadow-lg rounded-lg bg-white">
            <TextInput
              className="py-2 px-3 font-bold tracking-wide bg-white basis-[13%] truncate text-center"
              placeholder="1"
              placeholderTextColor="#C9C9C9"
              value={days}
              maxLength={3}
              onChangeText={setDays}
              keyboardType="numeric"
            />
            <Text className="mt-3 ml-2 text-gray-700 basis-[12%]">days</Text>
            <View className="ml-2 h-[58px] mt-[-8px] border-2 border-gray-100"></View>
            <TextInput
              className="py-2 font-bold tracking-wide bg-white basis-[13%] truncate text-center"
              placeholder="1"
              placeholderTextColor="#C9C9C9"
              value={rooms}
              maxLength={3}
              onChangeText={setRooms}
              keyboardType="numeric"
            />
            <Text className="mt-3 ml-2 text-gray-700 basis-[15%]">rooms</Text>
            <View className="ml-3 h-[58px] mt-[-8px] border-2 border-gray-100"></View>
            <TextInput
              className="py-2 font-bold tracking-wide bg-white basis-[13%] truncate text-center"
              placeholder="1"
              placeholderTextColor="#C9C9C9"
              value={guests}
              maxLength={3}
              onChangeText={setGuests}
              keyboardType="numeric"
            />
            <Text className="mt-3 ml-2 text-gray-700 basis-[15%]">guests</Text>
          </View>
          <Text className="mt-7 text-slate-800 font-bold tracking-widest">
            PRICE SUMMARY
          </Text>

          <View className=" p-3 mt-3 mb-32 rounded-lg shadow-lg bg-white">
            <View className="flex flex-row">
              <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                {days} days,
              </Text>
              <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                {rooms} Room,
              </Text>
              <Text className="text-gray-600 font-bold tracking-wide mr-1 mb-5">
                {guests} Guests
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text className="text-gray-500 font-bold tracking-wide mr-1">
                Total Price
              </Text>
              <Text className="text-[#0d9488] font-bold tracking-wide mr-1">
                {" "}
                &#36; {days * selectedHotel.price}{" "}
              </Text>
            </View>
            <View className="h-2 mb-3 mt-2 border-b-2 border-gray-100"></View>
          </View>
          <TouchableOpacity
            className="py-3 rounded-full"
            onPress={handleSaveBooking}
          >
            <LinearGradient
              colors={["#0d9488", "#ffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 4, y: 0 }}
              style={{ padding: 10, borderRadius: 20 }}
            >
              <Text className="text-white text-center font-bold">Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
