import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigateComponent from "./components/Navigators/NavigateComponent";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigateComponent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
