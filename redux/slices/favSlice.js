import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

export const favSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      const existsItem = state.favorites?.find(
        (item) => item.name === action.payload?.name
      );
      if (!existsItem) {
        state.favorites?.push(action.payload);
      } else {
      }
    },
    removeFav: (state, action) => {
      const removeItem = state.favorites?.filter(
        (item) => item.name !== action.payload
      );
      state.favorites = removeItem;
    },
  },
  extraReducers: {},
});

export const { addFav, removeFav } = favSlice.actions;
export default favSlice.reducer;
