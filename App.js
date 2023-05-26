import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigateComponent from "./components/Navigators/NavigateComponent";

const App = () => {
  return (
    <NavigationContainer>
      <NavigateComponent />
    </NavigationContainer>
  );
};

export default App;
