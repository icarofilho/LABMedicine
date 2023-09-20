import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const loginSlice = createSlice({
  name: "login",

  initialState,

  reducers: {
    login: () => {
      return true;
    },

    logout: () => {
      return false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
