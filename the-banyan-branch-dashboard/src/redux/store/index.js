import { combineReducers, configureStore } from "@reduxjs/toolkit";
import GetConstantsSlice from "../slice/GetConstantsSlice";
import BrandingSlice from "../slice/BrandingSlice";
import ProfileSlice from "../slice/ProfileSlice";
import ConfigurationSlice from "../slice/ConfigurationSlice";
import AuthSlice from "../slice/AuthSlice";
import AnalyticsSlice from "../slice/AnalyticsSlice";

export const reducer = {
  GetConstantsSlice: GetConstantsSlice,
  AuthSlice: AuthSlice,
  BrandingSlice: BrandingSlice,
  ProfileSlice: ProfileSlice,
  ConfigurationSlice: ConfigurationSlice,
  AnalyticsSlice: AnalyticsSlice,
};

const rootReducer = combineReducers(reducer);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
