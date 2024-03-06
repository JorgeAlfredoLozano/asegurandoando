import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import mapa from "../../../assets/ubicacion.png";

const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        const formData = new FormData(form.current);
        const data = {
          to_name: "Destinatario",
          from_name: "www.asegurandoando.com",
          message: formData.get("message")
        };
      
        emailjs
          .sendForm('service_cwze3jl', 'template_vgh47ra', form.current, 'NOJB7y0wM8LRLnFeY', data)
          .then(
            (result) => {
              console.log('SUCCESS!', result.text);
            },
            (error) => {
              console.log('FAILED...', error.text);
            }
          );
      };
      
   
    return (
        <div className="container mx-auto p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 md:mr-4 md:order-first">
                <h1 className="text-3xl font-bold mb-4">Contáctenos</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" className="block w-full p-2 pl-10" />
                    <br />
                    <br />
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" className="block w-full p-2 pl-10" />
                    <br />
                    <br />
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" className="block w-full p-2 pl-10"></textarea>
                    <br />
                    <br />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        value="Send"
                    >
                        Enviar
                    </button>
                </form>
            </div>
            {/* Barra lateral */}
            <div className="w-full md:w-1/3 md:order-last bg-gray-200 p-4">
                <div className="mr-4 md:mr-8">
                    <a href="https://www.google.com/maps/place/Mar%C3%ADa+Laura+Lobrundo+Seguros/@-36.7690258,-59.8622242,17z/data=!3m1!4b1!4m6!3m5!1s0x959427999fac5293:0x71b4f69a93b7abcb!8m2!3d-36.7690301!4d-59.8596493!16s%2Fg%2F11bz_zpy5s?entry=ttu" target="_blank" rel="noopener noreferrer">
                        <img src={mapa} alt="Asegurando Ando" className="mt-3 ml-4 w-full md:w-full" />
                    </a>
                </div>
                <p className="text-3xs font-medium mt-3 mb-5">Laura: +54 (02281) 15531966</p>
                <p className="text-3xs font-medium mt-3 mb-5">Jorge: +54 (02281) 15531457</p>
                <p className="text-3xs font-medium mb-5">Email: marialauralobrundo@gmail.com</p>
            </div>
        </div>
    );
};

export default Contacto;
