import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";

function DetailScreen() {
  // const { destination } = route.params;
  const route = useRoute();

  return (
    <View style={styles.container}>
      <ScrollView style={tw`bg-white`}>
        <Image
          source={require("../assets/sumba.jpg")}
          style={tw`w-full h-64`}
          resizeMode="cover"
        />
        <View style={tw`p-4`}>
          <Text style={tw`text-2xl font-bold mb-2`}>Beautiful House</Text>
          <Text style={tw`text-gray-500 mb-4`}>Los Angeles, CA</Text>
          <Text style={tw`text-gray-700 mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
            diam metus, ac commodo justo convallis ut. Integer sed vestibulum
            odio. Nullam a dui tellus. Proin vitae turpis consequat, commodo
            justo et, tempor libero. Quisque nec tellus elementum.
          </Text>
          <View style={tw`flex-row items-center`}>
            <Image
              source={require("../assets/avatar.png")}
              style={tw`w-8 h-8 rounded-full mr-2`}
            />
            <Text style={tw`text-gray-700 font-bold`}>John Doe</Text>
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
