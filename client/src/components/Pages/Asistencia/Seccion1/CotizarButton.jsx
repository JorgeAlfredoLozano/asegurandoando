import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "emailjs-com";
import { selectCotizacion, setCotizacion } from "../../../../redux/slices/cotizarSlice";
import WhatsApp from "../WhatsApp";

const CotizarButton = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarMensaje, setmostrarMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contacto, setContacto] = useState("whatsapp");
  const cotizacion = useSelector(selectCotizacion);
  const dispatch = useDispatch();
  const fechaActual = new Date();
  const fechaIda = cotizacion.fechaIda;
  const fechaVuelta = cotizacion.fechaVuelta;
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [messageWhatsApp, setmessageWhatsApp] = useState("");
  const [toHome, setToHome] = useState(false);

  const closePopup = () => {
    setPopupVisible(false);
    if (toHome) {
      window.location.href = "/asistencia";
    }
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleCotizarClick = () => {
    if (!fechaIda || !fechaVuelta) {
      setmostrarMensaje("Las fechas de salida y regreso no pueden estar vacías.");
    } else if (fechaVuelta < fechaIda) {
      setmostrarMensaje("La fecha de regreso debe ser mayor a la fecha de salida.");
    } else if (fechaIda < fechaActual) {
      setmostrarMensaje("La fecha de salida debe ser mayor a la fecha de hoy.");
    } else if (cotizacion.cantPasajeros.length === 0) {
      setmostrarMensaje("La cantidad de pasajeros debe ser mayor a cero.");
    } else {
      setMostrarPopup(true);
    }
  };

  const handleCancelarClick = () => {
    setMostrarPopup(false);
    setmostrarMensaje("");
  };

  const handleEnviarClick = () => {
    if (nombre.trim() === "") {
      setmostrarMensaje("El nombre no puede estar vacío.");
      return;
    }
    if (email.trim() === "") {
      setmostrarMensaje("El email no puede estar vacío.");
      return;
    }
    if (!validarEmail(email)) {
      setmostrarMensaje("El formato del email es incorrecto.");
      return;
    }
    if (telefono.trim() === "") {
      setmostrarMensaje("El teléfono no puede estar vacío.");
      return;
    }

    const message = {
      to_name: "Laura",
      from_name: nombre,
      message: `
        Nombre: ${nombre}
        Email: ${email}
        Teléfono: ${telefono}
        Contacto: ${contacto}
        Destino: ${cotizacion.destino}
        Cantidad de pasajeros: ${cotizacion.cantPasajeros.length}
        Edades de los pasajeros: ${cotizacion.cantPasajeros.join(", ")}
        Fecha de Ida: ${cotizacion.fechaIda}
        Fecha de Regreso: ${cotizacion.fechaVuelta}
      `,
    };

    emailjs
      .send("service_cwze3jl", "template_vgh47ra", message, "NOJB7y0wM8LRLnFeY")
      .then((response) => {
        setPopupMessage(`${nombre} tu solicitud de cotización ha sido enviada correctamente. Para una respuesta rápida, contáctanos en WhatsApp:`);
        setmessageWhatsApp(message.message);
        setPopupVisible(true);
        setToHome(true);
        console.log("Correo electrónico enviado con éxito:", response);
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico:", error);
      });

    dispatch(setCotizacion({}));
  };

  // Efecto para ocultar el mensaje de error después de un tiempo
  useEffect(() => {
    if (mostrarMensaje) {
      const timer = setTimeout(() => {
        setmostrarMensaje("");
      }, 3000); // El mensaje desaparecerá después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [mostrarMensaje]);

  return (
    <div className="w-full">
      {!mostrarPopup && (
        <div className="py-5 flex justify-center items-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            style={{ height: "40px" }}
            onClick={handleCotizarClick}
          >
            Cotizar
          </button>
        </div>
      )}
      {popupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white mx-auto rounded-lg p-6 max-w-md">
            <p className="text-xl mb-4">{popupMessage}</p>
            <WhatsApp phone={2281531966} msg={messageWhatsApp} />
            <button
              onClick={closePopup}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {mostrarPopup && (
        <div className="p-1/2 bg-white border border-gray-300 rounded-md mt-2">
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
            <option defaultValue="whatsapp">Contacto x Whatsapp</option>
            <option value="llamada">Contacto x Llamada</option>
            <option value="email">Contacto x Email</option>
          </select>
          <div className="flex justify-center items-center">
            <button
              className="px-4 py-2 mr-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
      {mostrarMensaje && (
        <div className="p-4 bg-white border border-gray-300 rounded-md mt-2">
          <h2>{mostrarMensaje}</h2>
          <div className="flex justify-center items-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleCancelarClick}
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CotizarButton;
