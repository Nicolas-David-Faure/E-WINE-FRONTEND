import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressSelectedInfo: null,
  paymentMethodSelectedInfo: null,
  
};

export const continueShoppingSlice = createSlice({
  name: "continueShopping",
  initialState,
  reducers: {
    addSelectedAddress: (state, { payload }) => {
      state.addressSelectedInfo = payload;
    },
    addSelectedPaymentMethod: (state, { payload }) => {
      state.paymentMethodSelectedInfo = payload;
    }
  },
});
// Action creators are generated for each case reducer function
export const { addSelectedPaymentMethod , addSelectedAddress} = continueShoppingSlice.actions;
