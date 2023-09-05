import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";

export const store = configureStore({
    reducer: {
     
      cartSlice: cartSlice.reducer
    },
  })
