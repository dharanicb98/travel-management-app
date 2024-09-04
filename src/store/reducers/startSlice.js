import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: false };

export const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    exploreSuccess: (state) => {
      state.isAuthenticated = true;
    },
    exploreFail: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { exploreSuccess, exploreFail } = startSlice.actions;
export default startSlice.reducer;