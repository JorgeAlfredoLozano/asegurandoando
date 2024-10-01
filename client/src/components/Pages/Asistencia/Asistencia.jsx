import React, { useEffect, useRef } from "react";
import Laura from "../../../assets/laura.jpg";
import Flag from "react-flagkit";
import DestinoMenu from "./Seccion1/DestinoMenu";
import FechaDatePicker from "./Seccion1/FechaDatePicker";
import PasajerosPopup from "./Seccion1/PasajerosPopup";
import CotizarButton from "./Seccion1/CotizarButton";
import WhatsApp from "./WhatsApp";

const Asistencia = () => {
  const formRef = useRef(null); // Referencia al formulario

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Sección de la imagen de fondo */}
      <div
        className="relative flex flex-col justify-center items-center w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5225325/pexels-photo-5225325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black opacity-40" />

        {/* Contenido centrado */}
        <div className="absolute top-20 flex flex-col items-center text-center px-4 space-y-4">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold">
            CONTRATÁ AHORA TU ASISTENCIA
          </h1>
          <h2 className="text-[#0aeb08] text-3xl md:text-5xl lg:text-6xl font-bold">
            ¡APROVECHA LOS DESCUENTOS Y FACILIDADES DE PAGO!
          </h2>
          <h3 className="text-gray-300 text-3xl font-bold">
            Aboná en PESOS con todos los medios de pago
          </h3>
          <p className="text-white text-lg md:text-xl lg:text-3xl mx-auto max-w-5xl">
            ¡Quiero ayudarte a que vivas tu viaje sin preocupaciones, con el
            respaldo de un seguro de viaje y una asistencia al viajero!
          </p>

          {/* Botón que hace scroll al formulario */}
          <button
            className="bg-[#0aeb08] text-white text-lg md:text-xl lg:text-2xl px-4 md:px-6 py-2 rounded-lg"
            onClick={scrollToForm}
          >
            ¡SOLICITA TU COTIZACION AHORA!
          </button>
        </div>
      </div>

      {/* Sección de información y tarjetas */}
      <div className="flex flex-col items-center py-10 bg-white shadow-md rounded-lg mt-4 mx-4 md:mx-8 lg:mx-16">
        <h2 className="text-4xl font-bold mb-8">
          ¿Cuánto cuesta la asistencia médica en el extranjero?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
          {/* Tarjetas */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gradient-to-r from-green-400 to-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center h-32 bg-gray-200">
              <Flag country="BR" size={128} className="text-5xl text-green-500" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold underline">
                Hospitalización por accidente
              </h3>
              <p className="mt-2 text-gray-700">
                ¿Sabías que una hospitalización en Brasil puede costarte USD
                40.000?
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gradient-to-r from-green-400 to-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center h-32 bg-gray-200">
              <Flag country="US" size={128} className="text-5xl text-green-500" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold underline">
                Internación en Estados Unidos
              </h3>
              <p className="mt-2 text-gray-700">
                ¿Sabías que una internación en Estados Unidos puede costarte USD
                50.000?
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gradient-to-r from-green-400 to-blue-500 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex justify-center items-center h-32 bg-gray-200">
              <Flag country="EU" size={128} className="text-5xl text-green-500" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold underline">
                Repatriación sanitaria desde Europa
              </h3>
              <p className="mt-2 text-gray-700">
                ¿Sabías que una repatriación sanitaria puede salir entre
                USD130.000 y USD150.000 desde un país de Europa a Argentina?
              </p>
            </div>
          </div>
        </div>

        <p className="text-gray text-lg md:text-xl lg:text-3xl mx-6 mt-2">
          La contratación de un seguro de viaje no evitará que un accidente,
          robo o enfermedad ocurran, pero si alguna de estas situaciones se
          presenta, contarás con un respaldo inmediato para afrontar el
          inconveniente y continuar con tu itinerario.
        </p>

        <button
          className="bg-[#0aeb08] text-white text-lg md:text-xl lg:text-2xl px-4 mt-4 md:px-6 py-2 rounded-lg"
          onClick={scrollToForm}
        >
          ¡SOLICITA TU COTIZACION AHORA!
        </button>
      </div>

      {/* Sección del formulario */}
      <div
        className="bg-gray-300 shadow-md rounded-lg mt-4 mx-4 md:mx-8 lg:mx-16"
        ref={formRef}
      >
        <h2 className="text-4xl font-bold mb-2 text-center">
          Completa el formulario y te contactaré con tu cotización
        </h2>
        <h3 className="text-red-500 text-2xl font-bold mb-2 text-center">
          IMPORTANTE: Si buscas un seguro de bajo costo y con prestaciones
          limitadas, esta cotización no será adecuada para ti.
        </h3>
        <h3 className="text-gray-500 text-2xl font-bold mb-2 text-center">
          Trabajo con compañías líderes en asistencia de viaje, como Coris, Pax,
          Assist Card, Europ Assistance, Universal Assistance, y Terrawind
          Global Protection, que ofrecen cobertura integral y de alta calidad.
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:max-w-3xl lg:max-w-6xl mx-auto">
            <DestinoMenu />
            <FechaDatePicker />
            <PasajerosPopup />
            <CotizarButton />
          </div>
        </div>
      </div>

      {/* Información de contacto */}
      <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-lg mt-4 mx-4 md:mx-8 lg:mx-16">
        <p className="text-black text-base md:text-lg lg:text-2xl mt-2">
          Si tienes problemas con el formulario, te dejo mi contacto directo con
          WhatsApp
        </p>
        <WhatsApp phone={2281531966} msg={"Este mensaje llega por publicidad!"} />
      </div>

      {/* Sección de información personal */}
      <div className="flex flex-col md:flex-row items-center p-4 bg-white shadow-md rounded-lg mt-4 mx-4 md:mx-8 lg:mx-16">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src={Laura}
            alt="María Laura Lobrundo"
            className="w-34 h-34 md:w-42 md:h-42 lg:w-50 lg:h-50 rounded-full object-cover border-4 border-[#0aeb08]"
          />
        </div>

        <div className="md:ml-4">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">
            María Laura Lobrundo
          </h3>
          <p className="text-gray text-base md:text-lg lg:text-2xl mt-2">
            Hola, soy María Laura Lobrundo, Productora Asesora de Seguros (Mat.
            81581), especializada en seguros de viaje y asistencia al viajero.
          </p>
          <p className="text-gray text-base md:text-lg lg:text-2xl mt-2">
            Aunque en muchos casos los seguros de viaje no son obligatorios para
            ingresar a determinados países, son absolutamente necesarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Asistencia;
