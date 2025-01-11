import { createSelector } from "@reduxjs/toolkit";

export const brandingSelector = createSelector(
  (state) => state,
  (state) => state.BrandingSlice
);
