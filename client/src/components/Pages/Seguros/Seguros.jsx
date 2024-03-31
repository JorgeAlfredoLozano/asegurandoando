import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Tipo from "./Seccion1/Tipo";
import Vehiculos from "./Seccion1/Vehiculos";
import CotizarButton from "./Seccion1/CotizarButton";
import HogarComercio from "./Seccion1/HogarComercio";
import { selectSeguros } from "../../../redux/slices/segurosSlice";
import AcercaDe from "./Seccion2/AcercaDe";
import Categories from "../../categories/Categories"

const Seguros = (Tipos = "Autos") => {
  const seguroCotizar = useSelector(selectSeguros);
  const [renderVehiculo, setRenderVehiculo] = useState(false);
  const [renderHogarComercio, setRenderHogarComercio] = useState(false);
  useEffect(() => {
    if (seguroCotizar.tipo === "Auto" || seguroCotizar.tipo === "Moto") {
      setRenderVehiculo(true);
    } else {
      setRenderVehiculo(false);
    }
    if (seguroCotizar.tipo === "Hogar") {
      setRenderHogarComercio(true);
    } else {
      setRenderHogarComercio(false);
    }
  }, [seguroCotizar]);

  return (
    <div>
      <Categories />
      <AcercaDe />
    </div>
  );
};

export default Seguros;
