import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actions: ( state , payload )=>{
     state.state = true
    },
  }
})
// Action creators are generated for each case reducer function
export const { actions } = cartSlice.actions

