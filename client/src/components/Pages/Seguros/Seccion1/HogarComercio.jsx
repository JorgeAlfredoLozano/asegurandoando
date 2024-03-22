import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeguros,
  setSeguros,
} from "../../../../redux/slices/segurosSlice";

const HogarComercio = () => {
  const vivienda = [
    "Casa de ocupación permanente",
    "Country de ocupación permanente",
    "Departamento de ocupación permanente",
    "Vivienda y/o departamento de ocupación transitoria",
  ];

  const material = [
    "Material",
    "Mat., Piedra y hasta 50% madera",
    "Madera",
    "Construccion en seco",
    "Adobe o similar",
  ];

  const techo = [
    "Material",
    "Material y tejas",
    "Tirantería de madera y tejas",
    "Tirantería de madera y zinc",
    "Zinc",
    "Tirantería de madera y paja",
    "Tirantería y tejas de madera",
  ];

  const cerramiento = [
    "Totalmente cerrados",
    "Al menos un costado abierto",
    "Totalmente abiertos",
  ];

  const seguroCotizar = useSelector(selectSeguros);
  const dispatch = useDispatch();

  const handleViviendaChange = (e) => {
    const viviendaSelected = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, vivienda: viviendaSelected }));
  };

  const handleMaterialChange = (e) => {
    const materialSelected = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, techo: materialSelected }));
  };

  const handleTechoChange = (e) => {
    const techoSelected = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, techo: techoSelected }));
  };

  const handleAnioChange = (e) => {
    const anioInput = e.target.value;
    dispatch(setSeguros({ ...seguroCotizar, anio: anioInput }));
  };

  if (seguroCotizar === null || seguroCotizar === undefined) {
    dispatch(setSeguros({ marca: "", modelo: "", anio: "" }));
  }

  return (
    <div className="w-full flex">
      <div className="w-1/2 flex flex-col mr-2">
        <p className="ml-3 text-white">Vivienda</p>
        <select
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar.vivienda}
          onChange={handleViviendaChange}
        >
          <option value="" disabled hidden>
            Auto
          </option>
          {vivienda.map((vivienda, index) => (
            <option key={index} value={vivienda}>
              {vivienda}
            </option>
          ))}
        </select>
        <select
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar.material}
          onChange={handleMaterialChange}
        >
          <option value="" disabled hidden>
            Material de construcción
          </option>
          {material.map((material, index) => (
            <option key={index} value={material}>
              {material}
            </option>
          ))}
        </select>
        <select
          className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={seguroCotizar.techo}
          onChange={handleTechoChange}
        >
          <option value="" disabled hidden>
            Material de construcción
          </option>
          {techo.map((techo, index) => (
            <option key={index} value={techo}>
              {techo}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="w-1/2 flex flex-col ml-2">
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
      </div> */}
    </div>
  );
};

export default HogarComercio;
