import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  count: null,
  update: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCart: (state, { payload }) => {
      //state.state = true
      state.count = payload;
    },
    addToCart: (state, { payload }) => {},
    updateCart: (state) => {
      state.update = !state.update;
    },
  },
});
// Action creators are generated for each case reducer function
export const { removeCart, addToCart, updateCart } = cartSlice.actions;
