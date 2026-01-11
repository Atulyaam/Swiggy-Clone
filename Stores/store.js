import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cardSlicer.jsx";

export const store = configureStore({
  reducer: {
    cartSlice: CartReducer,
  },
});
