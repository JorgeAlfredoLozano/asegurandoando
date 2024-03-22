import React from "react";
import DestinoMenu from "./Seccion1/DestinoMenu";
import FechaDatePicker from "./Seccion1/FechaDatePicker";
import PasajerosPopup from "./Seccion1/PasajerosPopup";
import CotizarButton from "./Seccion1/CotizarButton";
import PromocionesSection from "./Seccion2/PromocionesSection";
import AcercaDe from "./Seccion3/AcercaDe";
import Frase from "./Seccion4/Frase";

const Asistencia = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center md:h-screen" 
           style={{ 
            backgroundImage: "url('https://p4.wallpaperbetter.com/wallpaper/384/226/476/aircraft-wing-sky-clouds-wallpaper-preview.jpg')",
            minHeight: "50vh", 
            maxHeight: "50vh", 
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:max-w-3xl lg:max-w-6xl mx-auto">
          <DestinoMenu />
          <FechaDatePicker />
          <PasajerosPopup />
          <CotizarButton />
        </div>
      </div>

      <PromocionesSection />
        <div className="bg-gray-200">
          <AcercaDe inverted />
        </div>
        <div className="h-full">
          <Frase />
        </div>

    </div>
  );
};

export default Asistencia;
