import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BrandingSlice from "../slice/BrandingSlice";

export const reducer = {
  BrandingSlice: BrandingSlice,
};

const rootReducer = combineReducers(reducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
