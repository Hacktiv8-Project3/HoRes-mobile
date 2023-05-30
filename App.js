import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigateComponent from "./components/Navigators/NavigateComponent";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NavigateComponent />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
