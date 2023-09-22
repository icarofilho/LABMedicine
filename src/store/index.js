import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/loginSlice";
import userNameReducer from "./reducer/userNameSlice";

const store = configureStore({
  // objeto contendo os reducers
  reducer: {
    user: loginReducer,
    userName: userNameReducer,
  },
});

export default store;
