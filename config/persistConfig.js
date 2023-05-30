// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ['auth', 'cart'] // Persisting only the 'auth' state to storage.
};

export default persistConfig;
