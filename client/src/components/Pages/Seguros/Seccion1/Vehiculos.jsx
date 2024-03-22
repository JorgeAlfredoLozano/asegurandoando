import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeguros, setSeguros } from '../../../../redux/slices/segurosSlice';

const Vehiculos = () => {
  const seguroCotizar = useSelector(selectSeguros);
  const dispatch = useDispatch();

  const handleMarcaChange = (e) => {
    const marcaInput = e.target.value;
    console.log(marcaInput);
    dispatch(setSeguros({ ...seguroCotizar, marca: marcaInput }));
  };

  const handleModeloChange = (e) => {
    const modeloInput = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, modelo: modeloInput }));
  };

  const handleAnioChange = (e) => {
    const anioInput = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, anio: anioInput }));
  };

  if (seguroCotizar === null || seguroCotizar === undefined) {
    dispatch(setSeguros({ marca: '', modelo: '', anio: ''}));
  }

  return (
    <div className="w-full flex">
      <div className="w-1/2 flex flex-col mr-2">
        <p className="ml-3 text-white">Marca</p>
        <input
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar?.marca || ''}
          onChange={handleMarcaChange}
        />
      </div>
      <div className="w-1/2 flex flex-col ml-2">
        <p className="ml-3 text-white">Modelo</p>
        <input
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar?.modelo || ''}
          onChange={handleModeloChange}
        />
      </div>
      <div className="w-1/2 flex flex-col ml-2">
        <p className="ml-3 text-white">Año</p>
        <input
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar?.anio || ''}
          onChange={handleAnioChange}
        />
      </div>
    </div>
  );
}

export default Vehiculos;
