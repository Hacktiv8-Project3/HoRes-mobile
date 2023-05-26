import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

function SearchBarComponent() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };
  return (
    <View style={tw`bg-white p-4`}>
      <View
        style={tw`flex-row items-center rounded-full bg-gray-200 px-4 py-2`}
      >
        <Ionicons name="search" size={20} color="gray" style={tw`mr-2`} />
        <TextInput
          style={tw`flex-1`}
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search-outline" size={24} color="#0d9488" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SearchBarComponent;
