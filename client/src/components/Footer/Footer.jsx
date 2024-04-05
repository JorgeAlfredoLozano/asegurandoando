import logo from "../../assets/LOGOweb.png";
import React, { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <footer className="flex justify-center bg-gradient-to-b from-black to-secondary-1">
      <div className="max-w-screen-xl px-4 py-1 mx-auto sm:px-6 lg:px-8">
        <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src={logo}
              alt="Asegurando Ando"
              className="mx-auto w-50 h-20"
            />
            <p className="flex justify-center mt-4 text-sm text-gray-200">
              Seguínos en nuestras redes sociales.
            </p>
            <div className="flex justify-center mt-8 space-x-6 text-gray-200">
              <a
                className="hover:opacity-75"
                href="https://www.facebook.com/marialauralobrundo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href="http://www.instagram.com/marialauralobrundo"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.linkedin.com/in/marialauralobrundo/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Linkedin </span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >

                <path
                    fill="#currentColor"
                    d="M21.25 0H2.75A2.752 2.752 0 000 2.75v18.5A2.752 2.752 0 002.75 24h18.5A2.752 2.752 0 0024 21.25V2.75A2.752 2.752 0 0021.25 0zM7.75 20h-3V9h3zm-1.5-12.75a1.875 1.875 0 11-1.875-1.875A1.875 1.875 0 016.25 7.25zM20 20h-3v-5.25c0-.688-.562-1.25-1.25-1.25s-1.25.562-1.25 1.25V20h-3v-9h3v1.188c.438-.625 1.188-1.188 2.062-1.188 1.75 0 3 1.375 3 3.313V20z"
                  />


                </svg>
              </a>
              
            </div>
          </div>
          
          {!isMobile ? (
          <div className="flex justify-center mt-4 grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="flex justify-center font-medium text-white">
                Nosotros
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Acerca de{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Contactos{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Ubicación{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Careers{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="flex justify-center font-medium text-white">
                Servicios
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Seguros Generales{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Seguros de Viajes{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Asesoría de flotas{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Gestoría{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Trámites{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="flex justify-center font-medium text-white">
                Compañías
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Sancor Seguros{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Copán Seguros{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  La Perseverancia{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Triunfo Seguros{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Galeno Seguros{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Nación Seguros{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="flex justify-center font-medium text-white">
                Legal
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Privacy Policy{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Terms &amp; Conditions{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Returns Policy{" "}
                </a>
                <a className="flex justify-center hover:opacity-75" href>
                  {" "}
                  Accessibility{" "}
                </a>
              </nav>
            </div>
          </div>) : null}
        </div>
        <p className="flex justify-center mt-8 text-xs text-gray-200">
          © 2024 Derechos reservados a www.asegurandoando.com.ar
        </p>
        <p className="flex justify-center text-xs text-gray-200">
          de María Laura Lobrundo - Productor de Seguros mat. 81581
        </p>
        <p className="flex justify-center text-xs text-blue-200">
          Desarrollado por Jorge Lozano - puntonetazul@gmail.com
        </p>
      </div>
    </footer>
  );
}

export default Footer;
