import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggin: false,
  user: null,
  isAdmin : false,
  isSuperAdmin: true,
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
     }
  }
})
// Action creators are generated for each case reducer function
export const { changeLoggin , handleUser} = userSlice.actions

