import { configureStore } from "@reduxjs/toolkit";
import cotizarReducer from "./slices/cotizarSlice";
import segurosReducer from "./slices/segurosSlice";

export const store = configureStore({
  reducer: { 
    cotizar: cotizarReducer,
    seguros: segurosReducer,
  }
});
