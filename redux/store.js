import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import persistConfig from "../config/persistConfig";
import authSlice from "./slices/authSlice";
import bookingSlice from "./slices/bookingSlice";
import hotelSlice from "./slices/hotelSlice";

const rootReducer = combineReducers({
  hotels: hotelSlice,
  auth: authSlice,
  booking: bookingSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line import/no-anonymous-default-export
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
