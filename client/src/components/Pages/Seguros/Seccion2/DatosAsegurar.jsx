import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import mapa from "../../../../assets/ubicacion.png";
import whatsappIcon from "../../../../assets/whatsapp-icon.png";
import mail from "../../../../assets/mail.png";

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

const DatosAsegurar = () => {
  const form = useRef();
  const inputFileRefFrente = useRef(null); // Referencia para la imagen del frente
  const inputFileRefDorso = useRef(null); // Referencia para la imagen del dorso
  const [formData, setFormData] = useState({
    Nombre: "",
    Telefono: "",
    Email: "",
    Mensaje: "",
    Marca: "",
    Modelo: "",
    Anio: "",
    Cp: "",
    Localidad: "",
    Gnc: "NO",
    VTV: "NO",
    ok: false,
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [toHome, setToHome] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [frenteImage, setFrenteImage] = useState(null);
  const [dorsoImage, setDorsoImage] = useState(null);

  const totalPages = 2; // Define el número total de páginas aquí

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
        from_name: "www.asegurandoando.com.ar / cotización de AUTO",
        message: `
          Nombre: ${formData.Nombre}
          Teléfono: ${formData.Telefono}
          Correo Electrónico: ${formData.Email}
          Mensaje: ${formData.Mensaje}
          Marca: ${formData.Marca}
          Modelo: ${formData.Modelo}
          Año: ${formData.Anio}
          Cp: ${formData.Cp}
          Localidad: ${formData.Localidad}
          Gnc:${formData.Gnc}
          VTV:${formData.VTV}
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
            // Redirigir a la página principal después de 3 segundos
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
    const valueForFormData = type === "checkbox" ? (checked ? "SI" : "NO") : value;
    setFormData({
      ...formData,
      [name]: valueForFormData,
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
    if (toHome) {
      // Redirigir al usuario después de cerrar la ventana emergente
      window.location.href = "/";
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFrenteClick = () => {
    // Abre el selector de archivos para la imagen del frente
    inputFileRefFrente.current.click();
  };

  const handleDorsoClick = () => {
    // Abre el selector de archivos para la imagen del dorso
    inputFileRefDorso.current.click();
  };

  const handleChangeFile = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (imageType === "Frente") {
          setFrenteImage(reader.result);
        } else if (imageType === "Dorso") {
          setDorsoImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center">
      {popupVisible && <Popup message={popupMessage} onClose={closePopup} />}
      {currentPage === 1 && (
        <div className="w-full md:w-1/2 md:pr-2">
          <h1 className="text-2xl font-bold mb-4">DATOS PERSONALES</h1>
          <form ref={form} onSubmit={sendEmail}>
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
                    formData.Nombre === ""
                      ? "border-red-500"
                      : "border-gray-300"
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

            <button
              type="button"
              onClick={() => handlePageChange(2)}
              className="mt-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 self-center md:self-start"
            >
              Siguiente
            </button>
          </form>
        </div>
      )}
      {currentPage === 2 && (
        <div className="w-full md:w-1/2 md:pr-2">
          <h1 className="text-2xl font-bold mb-4">Cédula del vehículo</h1>
          <div className="flex flex-col md:flex-row">
            <button
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2 mb-2"
              onClick={handleFrenteClick}
            >
              Frente
            </button>
            <input
              type="file"
              ref={inputFileRefFrente}
              style={{ display: "none" }}
              onChange={(e) => handleChangeFile(e, "Frente")}
              name="Frente"
            />

            <img
              src={frenteImage}
              alt="Frente"
              className="w-16 h-16 rounded-md border border-gray-300 mr-2 mb-2"
            />

            <button
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
              onClick={handleDorsoClick}
            >
              Dorso
            </button>
            <input
              type="file"
              ref={inputFileRefDorso}
              style={{ display: "none" }}
              onChange={(e) => handleChangeFile(e, "Dorso")}
              name="Dorso"
            />

            <img
              src={dorsoImage}
              alt="Dorso"
              className="w-16 h-16 rounded-md border border-gray-300 mb-2"
            />
          </div>

          <button
            type="button"
            onClick={() => handlePageChange(1)}
            className="mt-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 self-center md:self-start"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="mb-4 bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 self-center md:self-start"
            value="Send"
          >
            Enviar
          </button>
        </div>
      )}

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
            onClick={() => handleWhatsAppClick(5492281531966)}
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

export default DatosAsegurar;
