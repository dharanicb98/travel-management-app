import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./reducers/loaderSlice";
import authSlice from "./reducers/authSlice";


export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    auth: authSlice,
  },
});