import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: false
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
     toggleNav:  ( state , {payload} )=>{
      if(payload == false){
        state.activeNav = false
      }else{
        state.activeNav = payload
      }
     },
  }
})
// Action creators are generated for each case reducer function
export const { toggleNav } = navBarSlice.actions