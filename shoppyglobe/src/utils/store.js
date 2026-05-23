// Importing configureStore function from Redux Toolkit
import {configureStore} from "@reduxjs/toolkit";

// Importing cart reducer
import cartReducer from "./cartSlice";

// Creating Redux store
export const store = configureStore({
  // Registering reducers
  reducer: {
    cart: cartReducer,
  },
});