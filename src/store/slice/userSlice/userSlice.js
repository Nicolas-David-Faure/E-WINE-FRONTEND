import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggin: false,
  user: null,
  menuOpen: false
  
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLoggin: ( state , {payload} )=>{
     state.isLoggin = payload
    },
    handleUser: ( state , {payload} )=>{
      if(payload){
      state.isLoggin = true
      state.user = payload
      }
      else{
        state.isLoggin = false
        state.user = null
      }
     },
     toggleMenu:  ( state , {payload} )=>{
      if(payload == false){
        state.menuOpen = false
      }else{
        state.menuOpen = !state.menuOpen 
      }
     },
  }
})
// Action creators are generated for each case reducer function
export const { changeLoggin , handleUser , toggleMenu } = userSlice.actions

