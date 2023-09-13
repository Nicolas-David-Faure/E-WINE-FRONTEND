import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slice/cartSlice";
import { userSlice } from './slice/userSlice';
import { continueShoppingSlice } from "./slice/continueShoppingSlice"; 

export const store = configureStore({
    reducer: {
      cartReducer: cartSlice.reducer,
      userReducer: userSlice.reducer,
      continueShoppingReducer: continueShoppingSlice.reducer
    }
  })
