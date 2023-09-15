import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searched: null,
  
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearch: (state, { payload }) => {
      state.searched = payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { changeSearch } = searchSlice.actions;
