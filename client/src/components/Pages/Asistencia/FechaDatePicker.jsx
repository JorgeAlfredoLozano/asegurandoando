import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCotizacion, setCotizacion } from '../../../redux/slices/cotizarSlice';

const FechaDatePicker = () => {
  const cotizacion = useSelector(selectCotizacion);
  const dispatch = useDispatch();
  const [selectedDateIda, setSelectedDateIda] = useState('');
  const [selectedDateVuelta, setSelectedDateVuelta] = useState('');

  const handleDateChangeIda = (e) => {
    setSelectedDateIda(e.target.value);
    dispatch(setCotizacion({...cotizacion, fechaIda:e.target.value}))
  };
  
  const handleDateChangeVuelta = (e) => {
    setSelectedDateVuelta(e.target.value);
    dispatch(setCotizacion({...cotizacion, fechaVuelta:e.target.value}))
  };

  return (
    <div className="w-full flex">
      <input
        type="date"
        className="flex-1 mr-2 p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ height: "35px" }}
        value={selectedDateIda}
        onChange={handleDateChangeIda}
      />
      <input
        type="date"
        className="flex-1 p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        style={{ height: "35px" }}
        value={selectedDateVuelta}
        onChange={handleDateChangeVuelta}
      />
    </div>
  );
}

export default FechaDatePicker;
