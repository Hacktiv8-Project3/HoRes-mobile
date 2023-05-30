import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function SearchBarComponent() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };
  return (
    <View className="bg-white p-4">
      <View className="flex-row items-center rounded-full bg-gray-200 px-4 py-2">
        <Ionicons name="search" size={20} color="gray" className="mr-2" />
        <TextInput
          className="flex-1"
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
