// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeguros, setSeguros } from '../../../../redux/slices/segurosSlice';


const tipo = [
  'Auto',
  'Moto',
  'Hogar',
  'Comercio',
  'Accidentes Personales',
  'Salud',
  'ART',
  'otro',
];

const Tipo = () => {
  const seguroCotizar = useSelector(selectSeguros);
  const dispatch = useDispatch();

  const handleTipoChange = (e) => {
    const selectedTipo = e.target.value;
    dispatch(setSeguros({ 
      ...seguroCotizar,
      tipo: selectedTipo,
      marca: "",
      modelo: "",
      anio: ""
     }));
  };

  return (
    <div className="w-full">
      <p className="ml-3 text-white">Tipo</p>
      <select
        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={seguroCotizar.tipo}
        onChange={handleTipoChange}
      >
        <option value="" disabled hidden>Auto</option>
        {tipo.map((tipo, index) => (
          
          <option key={index} value={tipo}>{tipo}</option>
        ))}
      </select>
    </div>
  );
}

export default Tipo;
