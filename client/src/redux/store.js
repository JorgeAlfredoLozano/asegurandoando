import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/cotizarSlice";

export const store = configureStore({
  reducer: { 
    cotizar: userReducer,
  }
});
