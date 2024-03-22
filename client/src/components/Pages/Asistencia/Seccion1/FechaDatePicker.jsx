import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCotizacion,
  setCotizacion,
} from "../../../../redux/slices/cotizarSlice";

const FechaDatePicker = () => {
  const cotizacion = useSelector(selectCotizacion);
  const dispatch = useDispatch();

  const handleDateChangeIda = (e) => {
    dispatch(setCotizacion({ ...cotizacion, fechaIda: e.target.value }));
  };

  const handleDateChangeVuelta = (e) => {
    dispatch(setCotizacion({ ...cotizacion, fechaVuelta: e.target.value }));
  };

  return (
    <div className="w-full flex">
      <div className="flex-1 mr-2">
        <p className="ml-3 text-white">Ida</p>
        <input
          type="date"
          className="p-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          style={{ height: "35px", width: "100%" }}
          onChange={handleDateChangeIda}
        />
      </div>
      <div className="flex-1">
        <p className="ml-3 text-white">Vuelta</p>
        <input
          type="date"
          className="p-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          style={{ height: "35px", width: "100%" }}
          onChange={handleDateChangeVuelta}
        />
      </div>
    </div>
  );
};

export default FechaDatePicker;
