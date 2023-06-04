import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  isAuthenticated: false,
  user: [],
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
      // state.user = null;
    },
    setUser: (state, action) => {
      const newAction = action.payload;
      if (!state.user.length) {
        state.user = newAction;
      }
    },
    updateUser: (state, action) => {
      const updatedUser = action.payload;
      state.user = { ...state.user, ...updatedUser };
    },
  },
});

export const { setToken, clearToken, setUser, updateUser } = authSlice.actions;

export default authSlice.reducer;
