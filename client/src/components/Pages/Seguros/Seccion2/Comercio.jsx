import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import mapa from "../../../../assets/ubicacion.png";
import whatsappIcon from "../../../../assets/whatsapp-icon.png";
import mail from "../../../../assets/mail.png";
import ComboBox from "react-select";
import { option } from "./options";

/* VENTANA POPUP PARA ERRORES Y CARTELES */
const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div className="bg-white rounded-lg p-8">
      <p className="text-xl">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
      >
        OK
      </button>
    </div>
  </div>
);

const Comercio = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
    Construccion: "",
    Cerramiento: "",
    Techo: "",
    Plantas: "1",
    Actividad: "",
    Cp: "",
    Localidad: "",
    SumaAseguradaIncendioContenido:"",
    SumaAseguradaIncendioEdificio:"",
    ok: false,
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false);
  const [numPlantas, setNumPlantas] = useState(1);

  const handleWhatsAppClick = (phoneNumber) => {
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  };


  const sendEmail = (e) => {
    e.preventDefault();

    let ok = true; // Bandera para verificar si todos los campos están completos

    // Validar campos requeridos
    for (const field in formData) {
      if (formData[field] === "") {
        ok = false;
        setPopupMessage(`El campo "${field}" es requerido`);
        setPopupVisible(true);
        break;
      }
    }

    if (ok) {
      const data = {
        to_name: "María Laura",
        from_name: "www.asegurandoando.com.ar / cotización de COMERCIO",
        message: `
        Nombre: ${formData.Nombre}
        Teléfono: ${formData.Telefono}
        Correo Electrónico: ${formData.Email}
        Mensaje: ${formData.Mensaje}
        Cp:${formData.Cp}
        Localidad:${formData.Localidad}
        Construccion: ${formData.Construccion},
        Cerramiento: ${formData.Cerramiento},
        Techo: ${formData.Techo},
        Plantas: ${formData.Plantas},
        Actividad: ${formData.Actividad},
        SumaAseguradaIncendioContenido:${formData.SumaAseguradaIncendioContenido},
        SumaAseguradaIncendioEdificio:${formData.SumaAseguradaIncendioEdificio},
      `,
      };

      emailjs
        .send("service_cwze3jl", "template_vgh47ra", data, "NOJB7y0wM8LRLnFeY")
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setPopupMessage(
              "Solicitud de cotización enviada correctamente, en breve será contactado."
            );
            setPopupVisible(true);
            setToHome(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (toHome) {
      // Redirigir al usuario después de cerrar la ventana emergente
      window.location.href = "/";
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center">
      {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
      <div className="w-full md:w-1/2 md:pr-2">
        <h1 className="text-2xl font-bold mb-4">COTIZACION DE COMERCIO</h1>
        <form ref={form} onSubmit={sendEmail}>
          {/* DATOS DE LA PERSONA */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-2">
              <label htmlFor="Nombre">Nombre:</label>
              <input
                type="text"
                id="Nombre"
                name="Nombre"
                value={formData.Nombre}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.Nombre === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="Telefono">Teléfono:</label>
              <input
                type="text"
                id="Telefono"
                name="Telefono"
                value={formData.Telefono}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.Telefono === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
              />
            </div>
          </div>
          <label htmlFor="Email">Correo Electrónico:</label>
          <input
            type="Email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className={`block w-full p-2 border ${
              formData.Email === "" ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          />
          <label htmlFor="Mensaje">Mensaje:</label>
          <textarea
            id="Mensaje"
            name="Mensaje"
            value={formData.Mensaje}
            onChange={handleChange}
            className={`block w-full p-2 border ${
              formData.Mensaje === "" ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          ></textarea>
          {/* Línea divisoria */}
          <div className="border-b border-2 border-solid border-gray-200 my-4"></div>
          {/* DATOS DE LA VIVIENDA */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 pr-2">
              <label htmlFor="Construccion">Construcción:</label>
              <ComboBox
                id="Construccion"
                name="Construccion"
                value={{ label: formData.Construccion, value: formData.Construccion }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Construccion: selectedOption.value })
                }
                
                options={option.Comercio.Construccion.map((item) => ({
                  value: item,
                  label: item,
                }))}
                isDisabled={popupVisible} 
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.Construccion === "" ? "#ff0000" : "#718096",
                  }),
                }}
              />
            </div>
            <div className="md:w-1/3 pr-2">
              <label htmlFor="Cerramiento">Cerramiento:</label>
              <ComboBox
                id="Cerramiento"
                name="Cerramiento"
                value={{ label: formData.Cerramiento, value: formData.Cerramiento }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Cerramiento: selectedOption.value })
                }
                options={option.Comercio.Cerramiento.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    borderColor:
                      formData.Cerramiento === "" ? "#ff0000" : "#718096",
                    zIndex: popupVisible ? "-1" : "0",
                  }),
                }}
              />
            </div>
            <div className="md:w-1/3">
              <label htmlFor="Techo">Techo:</label>
              <ComboBox
                id="Techo"
                name="Techo"
                value={{ label: formData.Techo, value: formData.Techo }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Techo: selectedOption.value })
                }
                options={option.Comercio.Techo.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.Techo === "" ? "#ff0000" : "#718096",
                  }),
                }}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 pr-2">
              <label htmlFor="Plantas">Cantidad de plantas:</label>
              <div className="block w-full ml-6 p-1">
                <button
                  type="button"
                  className="p-1 w-8 border rounded-full bg-blue-500 text-white"
                  onClick={() => {
                    if (numPlantas > 1) setNumPlantas(numPlantas - 1);
                  }}
                >
                  -
                </button>
                <span className="mx-4">{numPlantas}</span>
                <button
                  type="button"
                  className="p-1 border w-8 rounded-full bg-blue-500 text-white"
                  onClick={() => {
                    setNumPlantas(numPlantas + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="md:w-2/3">
              <label htmlFor="Actividad">Actividad:</label>
              <ComboBox
                id="Actividad"
                name="Actividad"
                value={{ label: formData.Actividad, value: formData.Actividad }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Actividad: selectedOption.value })
                }
                options={option.Comercio.Actividad.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.Actividad === "" ? "#ff0000" : "#718096",
                  }),
                }}
              />
            </div>
          </div>
          

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 pr-2">
              <label htmlFor="Cp">CP:</label>
              <input
                type="text"
                id="Cp"
                name="Cp"
                placeholder="7600"
                value={formData.Cp}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.Cp === "" ? "border-red-500" : "border-gray-300"
                } rounded-md`}
                title="Ingrese el código postal del riesgo."
              />
            </div>
            <div className="md:w-3/4">
              <label htmlFor="Localidad">Localidad del Riesgo:</label>
              <input
                type="text"
                id="Localidad"
                name="Localidad"
                placeholder="Tandil"
                value={formData.Localidad}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.Localidad === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                title="Ingrese la localidad donde se encuentra el riesgo."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row border border-gray-500 mt-4 p-3">
            <span>Suma Asegurada</span>
            <div className="md:w-1/2 pr-2">
              <label htmlFor="SumaAseguradaIncendioEdificio">Incendio Edificio:</label>
              <input
                type="text"
                id="SumaAseguradaIncendioEdificio"
                name="SumaAseguradaIncendioEdificio"
                placeholder="$95.000.000"
                value={formData.SumaAseguradaIncendioEdificio}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.SumaAseguradaIncendioEdificio === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                title="Ingrese la suma por la cual quiere asegurar su comercio"
              />
            </div>
            <div className="md:w-1/2 pr-2">
              <label htmlFor="SumaAseguradaIncendioContenido">Incendio contenido en general:</label>
              <input
                type="text"
                id="SumaAseguradaIncendioContenido"
                name="SumaAseguradaIncendioContenido"
                placeholder="$20.000.000"
                value={formData.SumaAseguradaIncendioContenido}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.SumaAseguradaIncendioContenido === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                title="Ingrese la suma por la cual quiere asegurar el contenido dentro de su comercio"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mb-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 self-center md:self-start"
            value="Send"
          >
            Enviar
          </button>
        </form>
      </div>
      {/* Barra lateral */}
      <div className="md:w-1/3 md:flex bg-gray-200 p-4 flex flex-col items-center">
        <div className="mr-4 md:mr-8">
          <a
            href="https://www.google.com/maps/place/Mar%C3%ADa+Laura+Lobrundo+Seguros/@-36.7690258,-59.8622242,17z/data=!3m1!4b1!4m6!3m5!1s0x959427999fac5293:0x71b4f69a93b7abcb!8m2!3d-36.7690301!4d-59.8596493!16s%2Fg%2F11bz_zpy5s?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mapa}
              alt="Asegurando Ando"
              className="mt-3 ml-4 w-full md:w-full"
            />
          </a>
        </div>
        <div className="flex items-center mt-3">
          <p className="text-3xs font-medium mb-4 mr-2">
            Laura: +54 (02281) 15531966
          </p>
          <img
            onClick={() => handleWhatsAppClick("5492281531966")}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
          />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-3xs font-medium mb-4 mr-2">
            Jorge: +54 (02281) 15531457
          </p>
          <img
            onClick={() => handleWhatsAppClick("5492281531457")}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
          />
        </div>
        <div className="flex items-center mt-3">
          <p className="text-3xs font-medium mb-4 mr-2">
            marialauralobrundo@gmail.com
          </p>
          <a href="mailto:marialauralobrundo@gmail.com">
            <img
              src={mail}
              alt="Correo electrónico"
              className="cursor-pointer w-5 h-5 mb-4 hover:h-8 hover:w-8"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Comercio;
