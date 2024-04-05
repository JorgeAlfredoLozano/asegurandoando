import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import mapa from "../../../../assets/ubicacion.png";
import whatsappIcon from "../../../../assets/whatsapp-icon.png";
import mail from "../../../../assets/mail.png";
import ComboBox from "react-select";
import { option } from "./options";

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

const Hogar = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
    MetrosCub: "",
    SumaAsegurada: "",
    TipoVivienda: "",
    Material: "",
    Techo: "",
    Cerramiento: "",
    Construccion: "",
    SeguridadAlarma: "NO",
    SeguridadVigilancia: "NO",
    SeguridadBlindada: "NO",
    SeguridadIncendio: "NO",
    Cp: "",
    Localidad: "",
    AntiSismica: "",
    ok: false,
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false)

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
        // Si un campo está vacío, establecer la bandera ok en falso y mostrar mensaje de error
        ok = false;
        setPopupMessage(`El campo "${field}" es requerido`);
        setPopupVisible(true);
        break;
      }
    }

    if (ok) {
      // Si todos los campos están completos, enviar el formulario

    const data = {
      to_name: "María Laura",
      from_name: "www.asegurandoando.com.ar / cotización de HOGAR",
      message: `
        Nombre: ${formData.Nombre}
        Teléfono: ${formData.Telefono}
        Correo Electrónico: ${formData.Email}
        Mensaje: ${formData.Mensaje}
        MetrosCub: ${formData.MetrosCub},
        SumaAsegurada:${formData.SumaAsegurada},
        TipoVivienda: ${formData.TipoVivienda},
        Material: ${formData.Material},
        Techo: ${formData.Techo},
        Cerramiento: ${formData.Cerramiento},
        Construccion: ${formData.Construccion},
        SeguridadAlarma: ${formData.SeguridadAlarma},
        SeguridadVigilancia: ${formData.SeguridadVigilancia},
        SeguridadBlindada: ${formData.SeguridadBlindada},
        SeguridadIncendio: ${formData.SeguridadIncendio},
        AntiSismica:${formData.AntiSismica},
        Cp:${formData.Cp},
        Localidad:${formData.Localidad},
      `,
    };
    

      emailjs
        .send(
          "service_cwze3jl",
          "template_vgh47ra",
          data,
          "NOJB7y0wM8LRLnFeY",
          
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            setPopupMessage("Solicitud de cotización enviada correctamente, en breve será contactado.");
            setPopupVisible(true);
            setToHome(true)
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const valueForFormData = checked ? "SI" : "NO"; 
      console.log(valueForFormData)
      setFormData({
        ...formData,
        [name]: valueForFormData,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        <h1 className="text-2xl font-bold mb-4">COTIZACION DE HOGAR</h1>
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
              <label htmlFor="TipoVivienda">Vivienda:</label>
              <ComboBox
                id="TipoVivienda"
                name="TipoVivienda"
                value={{ label: formData.TipoVivienda, value: formData.TipoVivienda }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, TipoVivienda: selectedOption.value })
                }
                options={option.Hogar.TipoVivienda.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.TipoVivienda === "" ? "#ff0000" : "#718096",
                  }),
                }}
              />
            </div>
            <div className="md:w-1/3 pr-2">
              <label htmlFor="Material">Material:</label>
              <ComboBox
                id="Material"
                name="Material"
                value={{ label: formData.Material, value: formData.Material }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, TipoVivienda: selectedOption.value })
                }
                options={option.Hogar.Material.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.Material === "" ? "#ff0000" : "#718096",
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
                options={option.Hogar.Techo.map((item) => ({
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
            <div className="md:w-1/2 pr-2">
              <label htmlFor="Cerramiento">Cerramiento:</label>
              <ComboBox
                id="Cerramiento"
                name="Cerramiento"
                value={{ label: formData.Cerramiento, value: formData.Cerramiento }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Cerramiento: selectedOption.value })
                }
                options={option.Hogar.Cerramiento.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.Cerramiento === "" ? "#ff0000" : "#718096",
                  }),
                }}
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="Construccion">Construcción:</label>
              <ComboBox
                id="Construccion"
                name="Construccion"
                value={{ label: formData.Construccion, value: formData.Construccion }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, Construccion: selectedOption.value })
                }
                options={option.Hogar.Construccion.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
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
          </div>
          <div className="mt-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="SeguridadIncendio"
                  name="SeguridadIncendio"
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="incendios">Detección Incendios</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="SeguridadVigilancia"
                  name="SeguridadVigilancia"
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="Vigilancia">Vigilancia</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="SeguridadBlindadas"
                  name="SeguridadBlindadas"
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="Blindada">Puertas blindadas</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="SeguridadAlarma"
                  name="SeguridadAlarma"
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="Alarma">Alarma monitoreada</label>
              </div>
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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 pr-2">
              <label htmlFor="SumaAsegurada">Suma Asegurada:</label>
              <input
                type="text"
                id="SumaAsegurada"
                name="SumaAsegurada"
                placeholder="$95.000.000"
                value={formData.SumaAsegurada}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.SumaAsegurada === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                title="Ingrese el valor de su propiedad a asegurar"
              />
            </div>
            <div className="md:w-1/3 pr-2">
              <label htmlFor="MetrosCub">Metros Cubiertos:</label>
              <input
                type="text"
                id="MetrosCub"
                name="MetrosCub"
                placeholder="65"
                value={formData.MetrosCub}
                onChange={handleChange}
                className={`block w-full p-2 border ${
                  formData.MetrosCub === ""
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md`}
                title="Ingrese la cantidad de metros cubiertos de la vivienda."
              />
            </div>
            <div className="md:w-1/3">
              <label htmlFor="AntiSismica">Anti sísmica:</label>
              <ComboBox
                id="AntiSismica"
                name="AntiSismica"
                value={{ label: formData.AntiSismica, value: formData.AntiSismica }}
                onChange={(selectedOption) =>
                  setFormData({ ...formData, AntiSismica: selectedOption.value })
                }
                options={option.Hogar.AntiSismica.map((item) => ({
                  value: item,
                  label: item,
                }))}
                noOptionsMessage={() => "Sin coincidencias"}
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    zIndex: popupVisible ? "-1" : "0",
                    borderColor:
                      formData.AntiSismica === "" ? "#ff0000" : "#718096",
                  }),
                }}
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

export default Hogar;
