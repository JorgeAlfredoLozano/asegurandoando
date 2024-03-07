// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCotizacion, setCotizacion } from '../../../redux/slices/cotizarSlice';

const destinations = [
  'Europa',
  'Norte America',
  'Caribe-Mexico',
  'Sudamerica',
  'Africa',
  'Asia',
  'Oceania',
  'Multidestino',
  'Nacional',
];

const DestinoMenu = () => {
  const cotizacion = useSelector(selectCotizacion);
  const dispatch = useDispatch();

  const handleDestinationChange = (e) => {
    const selectedDestination = e.target.value;
    dispatch(setCotizacion({ ...cotizacion, destino: selectedDestination }));
  };

  return (
    <div className="w-full">
      <select
        className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={cotizacion.destino}
        onChange={handleDestinationChange}
      >
        {destinations.map((destination, index) => (
          <option key={index} value={destination}>{destination}</option>
        ))}
      </select>
    </div>
  );
}

export default DestinoMenu;
