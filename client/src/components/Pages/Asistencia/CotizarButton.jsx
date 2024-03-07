import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import emailjs from "emailjs-com";
import { selectCotizacion } from '../../../redux/slices/cotizarSlice';

const CotizarButton = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contacto, setContacto] = useState('');
  const cotizacion = useSelector(selectCotizacion);

  const handleCotizarClick = () => {
    setMostrarPopup(true);
  };

  const handleCancelarClick = () => {
    setMostrarPopup(false)
  }
  const handleEnviarClick = () => {
    const message = {
      to_name: "Destinatario",
      from_name: "www.asegurandoando.com",
      message: `
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono}
        Contacto: ${contacto}
        Destino: ${cotizacion.destino}
        Cantidad de pasajeros: ${cotizacion.cantPasajeros.length}
        Edades de los pasajeros: ${cotizacion.cantPasajeros.join(", ")}
        Fecha de salida: ${cotizacion.fechaSalida}
      `,
    };
    
    // Envío del formulario por correo electrónico
    emailjs
      .send('service_cwze3jl', 'template_vgh47ra', message, 'NOJB7y0wM8LRLnFeY')
      .then((response) => {
        console.log("Correo electrónico enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          style={{ height: "40px" }}
          onClick={handleCotizarClick}
        >
          Cotizar
        </button>
      </div>
      {mostrarPopup && (
        <div className="p-4 bg-white border border-gray-300 rounded-md mt-2">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <select
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
          >
            <option value="">Seleccionar opción de contacto</option>
            <option value="llamada">Llamada</option>
            <option value="whatsapp">Whatsapp</option>
            <option value="email">Email</option>
          </select>
          <div className="flex justify-center items-center">

          <button
            className="px-4 py-2 mr-4  bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleEnviarClick}
          >
            Enviar
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleCancelarClick}
          >
            Cancelar
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CotizarButton;
