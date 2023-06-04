import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/authSlice";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { ROUTES } from "../constants";

function AccountScreen() {
  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [firstName, setFirstName] = useState(userData?.firstName);
  const [lastName, setLastName] = useState(userData?.lastName);
  const [email, setEmail] = useState(userData?.email);
  const [gender, setGender] = useState(userData?.gender);

  const handleUpdateUser = () => {
    const updatedUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
    };

    dispatch(updateUser(updatedUser));

    Alert.alert("User Updated", 
    "User data has been successfully updated!",
    [
      {
        text: "OK",
        onPress: () => {
          // Redirect to the ProfileScreen
          navigation.navigate(ROUTES.SETTINGS);
        },
      },
    ]
    );
  };

  return (
    <View className="flex flex-wrap">
      <View className="w-full p-4">
        <View className="bg-white rounded-xl shadow-lg overflow-hidden mb-3 p-4">
          <View>
            <Text className="text-md font-bold mb-2">Change your first name here</Text>
            <TextInput 
              value={firstName}
              onChangeText={setFirstName} 
              style={{borderWidth:1, padding:10, borderRadius:10, alignContent:"center", marginBottom:15}} />
          </View>
          <View>
            <Text className="text-md font-bold mb-2">Change your last name here</Text>
            <TextInput 
              value={lastName}
              onChangeText={setLastName} 
              style={{borderWidth:1, padding:10, borderRadius:10, alignContent:"center", marginBottom:15}} />
          </View>
          <View>
            <Text className="text-md font-bold mb-2">Change your email here</Text>
            <TextInput 
              value={email}
              onChangeText={setEmail}
              style={{borderWidth:1, padding:10, borderRadius:10, alignContent:"center", marginBottom:15}} />
          </View>
          <View className="mb-2">
            <Text className="text-md font-bold mb-2">Change your gender here</Text>
            <TextInput
              value={gender}
              onChangeText={setGender}
              style={{borderWidth:1, padding:10, borderRadius:10, alignContent:"center", marginBottom:15}} />

          </View>
          <View className="h-10 w-20 ">
            <Button title="Submit" color="#0d9488" onPress={handleUpdateUser}/>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AccountScreen;