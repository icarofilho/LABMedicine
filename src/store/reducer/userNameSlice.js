import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userNameSlice = createSlice({
  name: "login",

  initialState,

  reducers: {
    setName: (state, { payload }) => payload,
  },
});

export const { setName } = userNameSlice.actions;

export default userNameSlice.reducer;
