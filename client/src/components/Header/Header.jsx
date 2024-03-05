// import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/LOGOweb.png"; // Asegúrate de proporcionar la ruta correcta

const Header = () => {

  return (
    <nav className="bg-gradient-to-b from-black to-secondary-1 text-primary-1 shadow" role="navigation">
  <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
    <div className="mr-4 md:mr-8">
      <a href="#" rel="home">
        <img src={logo} alt="Asegurando Ando" className="w-50 h-20" />
      </a>
    </div>
    <div className="ml-auto md:hidden">
      <button className="flex items-center px-3 py-2 border rounded" type="button">
        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
      {/* <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0"> */}
      <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
      <li>
          <a className="block ml-12 px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Asistencia al Viajero</a>
        </li>
        <li>
          <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Seguros</a>
        </li>
        <li>
          <a className="block px-4 py-1 md:p-2 lg:px-4 text-purple-600" href="#" title="Active Link">Gestoría</a>
        </li>
        <li>
          <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Compañías</a>
        </li>
      </ul>
      {/* <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
        <li>
          <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Inicio de sesión</a>
        </li>
        <li>
          <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Contacto</a>
        </li>
      </ul> */}
    </div>
  </div>
</nav> 
  );
}

export default Header;
