import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./reducers/loaderSlice";
import authSlice from "./reducers/authSlice";
import startSlice from "./reducers/startSlice";
import placesData from "./reducers/placesSlice";


export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    auth: authSlice,
    start : startSlice,
    places : placesData,
  },
});