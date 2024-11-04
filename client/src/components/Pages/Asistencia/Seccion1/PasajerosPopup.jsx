import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCotizacion,
  setCotizacion,
} from "../../../../redux/slices/cotizarSlice";

const PasajerosPopup = () => {
  const [numPasajeros, setNumPasajeros] = useState(0);
  const [edades, setEdades] = useState([]);
  const dispatch = useDispatch();
  const cotizacion = useSelector(selectCotizacion);

  const incrementarPasajeros = () => {
    setNumPasajeros((prevNumPasajeros) => prevNumPasajeros + 1);
  };

  const decrementarPasajeros = () => {
    if (numPasajeros > 0) {
      setNumPasajeros((prevNumPasajeros) => prevNumPasajeros - 1);
      const newEdades = [...edades]; // Crear una nueva copia del array de edades
      newEdades.pop(); // Eliminar el último elemento del array
      setEdades(newEdades); // Actualizar el estado de edades con la nueva copia
      dispatch(setCotizacion({ ...cotizacion, cantPasajeros: newEdades }));
    }
  };

  const handleEdadChange = (index, e) => {
    const newEdades = [...edades];
    newEdades[index] = e.target.value;
    setEdades(newEdades);
    const newCantPasajeros = [...cotizacion.cantPasajeros];
    newCantPasajeros[index] = e.target.value; // o puedes cambiarlo según lo que necesites
    dispatch(setCotizacion({ ...cotizacion, cantPasajeros: newCantPasajeros }));
  };

  return (
    <div className="w-full">
      <p className="ml-7 text-white">Cantidad de Pasajeros</p>
      <div className="ml-4 flex justify-center items-center rounded-md bg-white ">
        <button
          className="p-1 w-8 border rounded-full bg-blue-500 text-white"
          onClick={decrementarPasajeros}
        >
          -
        </button>
        <span className="mx-4">{numPasajeros}</span>
        <button
          className="p-1 border w-8 rounded-full bg-blue-500 text-white"
          onClick={incrementarPasajeros}
        >
          +
        </button>
      </div>
      {numPasajeros > 0 && (
        <div className="p-4 bg-white border border-gray-300 rounded-md mt-2">
          {[...Array(numPasajeros)].map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Edad ${index + 1}`}
              className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
              value={edades[index] || ""}
              onChange={(e) => handleEdadChange(index, e)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PasajerosPopup;
