import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginSlice";

const store = configureStore({
  // objeto contendo os reducers
  reducer: {
    user: loginReducer,
  },
});

export default store;
