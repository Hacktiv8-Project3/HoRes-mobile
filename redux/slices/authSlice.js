import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
  prevScreen: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      state.prevScreen = null; // Reset prevScreen saat logout
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setPrevScreen: (state, action) => {
      state.prevScreen = action.payload;
    },
  },
});

export const { setToken, clearToken, setUser, setPrevScreen } =
  authSlice.actions;

export default authSlice.reducer;
