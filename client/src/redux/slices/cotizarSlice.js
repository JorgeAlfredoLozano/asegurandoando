import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cotizacion: {
    destino: "Sudamerica",
    fechaIda: null,
    fechaVuelta: null,
    cantPasajeros: []
  }
};

const cotizarSlice = createSlice({
  name: "cotizar",
  initialState,
  reducers: {
    setCotizacion: (state, action) => {
      state.cotizacion = action.payload;
    },
  },
});

export const { setCotizacion } = cotizarSlice.actions;

export const selectCotizacion = (state) => state.cotizar.cotizacion;

export default cotizarSlice.reducer;
