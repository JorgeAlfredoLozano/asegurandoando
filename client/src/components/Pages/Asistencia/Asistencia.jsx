import React from 'react';
import DestinoMenu from './DestinoMenu';
import FechaDatePicker from './FechaDatePicker';
import PasajerosPopup from './PasajerosPopup';
import CotizarButton from './CotizarButton';
import PromocionesSection from './PromocionesSection';
import HorizontalSection from './HorizontalSection';

const Asistencia = () => {
  return (
    <div className="flex flex-col" style={{ backgroundImage: "url('https://p4.wallpaperbetter.com/wallpaper/384/226/476/aircraft-wing-sky-clouds-wallpaper-preview.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="mt-5 flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:max-w-3xl lg:max-w-6xl mx-auto">
          <DestinoMenu />
          <FechaDatePicker />
          
          <PasajerosPopup />

          <CotizarButton />
        </div>
      </div>

      <PromocionesSection />

      <HorizontalSection />

      <div className="bg-gray-200">
        <HorizontalSection inverted />
      </div>
    </div>
  );
}

export default Asistencia;
