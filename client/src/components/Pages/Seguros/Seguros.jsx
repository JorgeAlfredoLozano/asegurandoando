import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tipo from "./Seccion1/Tipo";
import Vehiculos from "./Seccion1/Vehiculos";
import CotizarButton from "./Seccion1/CotizarButton";
import HogarComercio from "./Seccion1/HogarComercio"
import { selectSeguros } from '../../../redux/slices/segurosSlice';

const Asistencia = () => {
  const seguroCotizar = useSelector(selectSeguros);
  const [renderVehiculo, setRenderVehiculo] = useState(false); 
  const [renderHogarComercio, setRenderHogarComercio] = useState(false); 
  useEffect(()=>{
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
  },[seguroCotizar])

  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" 
           style={{ 
            backgroundImage: "url('https://img.freepik.com/foto-gratis/pareja-casa-junto-sentado-piso-computadora_1303-10157.jpg?w=740&t=st=1710196643~exp=1710197243~hmac=97e0b8f23a33c04708843b668589a5007a239172a8c32b109de5edfd3c9a661f')",
            minHeight: "60vh", 
            maxHeight: "60vh", 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full md:max-w-3xl lg:max-w-6xl mx-auto">
          <div>
            <Tipo />
            {renderVehiculo && <Vehiculos />}
            {renderHogarComercio && <HogarComercio />}
          </div>
          <CotizarButton />
          {/* <DestinoMenu />
          <FechaDatePicker />
          <PasajerosPopup />
           */}
        </div>
      </div>

      {/* <PromocionesSection />

      <div className="bg-gray-200">
        <AcercaDe inverted />
      </div>

      <Frase /> */}

    </div>
  );
};

export default Asistencia;
