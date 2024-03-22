import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seguroCotizar: {tipo:"Auto"}
};

const segurosSlice = createSlice({
  name: "seguros",
  initialState,
  reducers: {
    setSeguros: (state, action) => {
      state.seguroCotizar = { ...state.seguroCotizar, ...action.payload };
    },
  },
});

export const { setSeguros } = segurosSlice.actions;
export const selectSeguros = (state) => state.seguros.seguroCotizar;

export default segurosSlice.reducer;
