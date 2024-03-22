import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "emailjs-com";
import { selectCotizacion, setCotizacion } from "../../../../redux/slices/cotizarSlice";

const CotizarButton = () => {
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [mostrarMensaje, setmostrarMensaje] = useState("");
  const [mostrarCruz, setMostrarCruz] = useState({
    nombre: false,
    email: false,
    telefono: false,
  });
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contacto, setContacto] = useState("");
  const cotizacion = useSelector(selectCotizacion);
  const dispatch = useDispatch();
  const fechaActual = new Date();
  const fechaIda = cotizacion.fechaIda;
  const fechaVuelta = cotizacion.fechaVuelta;
  
  
  const handleCotizarClick = () => {
    if (cotizacion.cantPasajeros.length == 0) {
      setmostrarMensaje(`La cantidad de pasajeros debe se mayor a cero`);
    } else if (fechaVuelta < fechaIda) {
      setmostrarMensaje(
        `La fecha de regreso debe ser mayor a la fecha de salida.`
      );
    } else if (fechaIda < fechaActual) {
      setmostrarMensaje(`La fecha de salida debe ser mayor a la decha de hoy.`);
    } else {
      setMostrarPopup(true);
    }
  };

  const handleCancelarClick = () => {
    setMostrarPopup(false);
    setmostrarMensaje("");
  };

  const handleEnviarClick = () => {
    let nuevosMostrarCruz = {};
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
    if (nombre == "") {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, nombre: true };
    } else {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, nombre: false };
    }
    if (email == "") {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, email: true };
    } else {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, email: false };
    }
    if (telefono == "") {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, telefono: true };
    } else {
      nuevosMostrarCruz = { ...nuevosMostrarCruz, telefono: false };
    }
    setMostrarCruz({ ...mostrarCruz, ...nuevosMostrarCruz });

    // Envío del formulario por correo electrónico
    if (
      !mostrarCruz.nombre &&
      !mostrarCruz.telefono &&
      !mostrarCruz.email
    ) {
      emailjs
        .send("service_cwze3jl", "template_vgh47ra", message, "NOJB7y0wM8LRLnFeY")
        .then((response) => {
          console.log("Correo electrónico enviado con éxito:", response);
        })
        .catch((error) => {
          console.error("Error al enviar el correo electrónico:", error);
        });
      dispatch(setCotizacion({}));
      setMostrarCruz({
        nombre: false,
        email: false,
        telefono: false,
      })
    }
  };

  return (
    <div className="w-full">
      <div className="py-5 flex justify-center items-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          style={{ height: "40px" }}
          onClick={handleCotizarClick}
        >
          Cotizar
        </button>
      </div>

      {mostrarPopup && (
        <div className="p-1/2 bg-white border border-gray-300 rounded-md mt-2">
          <input
            type="text"
            placeholder={
              mostrarCruz.nombre ? "Nombre y Apellido ❌" : "Nombre y Apellido"
            }
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder={mostrarCruz.email ? "Email ❌" : "Email"}
            className="block w-full p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder={mostrarCruz.telefono ? "Teléfono ❌" : "Teléfono"}
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
      {mostrarMensaje != "" && (
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
