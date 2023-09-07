// importação do criador
import { createSlice } from "@reduxjs/toolkit";
// estado inicial
const initialState = false;
// variável exposta
const loginSlice = createSlice({
  // nome do action type
  name: "login",
  // estado inicial
  initialState,
  // métodos para a mutabilidade
  reducers: {
    // método de incremento
    login: (state) => {
      return true;
    },
    // método de decremento
    logout: (state) => {
      return false;
    },
  },
});
// exportação dos métodos
export const { login, logout } = loginSlice.actions;
// exportação do reducer
export default loginSlice.reducer;
