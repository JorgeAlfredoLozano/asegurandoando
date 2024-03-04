// // import React from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/LOGOweb.png"; // Asegúrate de proporcionar la ruta correcta

// const Header = () => {

//   return (
//     <nav className="bg-gradient-to-b from-black to-secondary-1 text-primary-1 shadow" role="navigation">
//   <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
//     <div className="mr-4 md:mr-8">
//       <a href="#" rel="home">
//         <img src={logo} alt="Asegurando Ando" className="w-50 h-20" />
//       </a>
//     </div>
//     <div className="ml-auto md:hidden">
//       <button className="flex items-center px-3 py-2 border rounded" type="button">
//         <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <title>Menu</title>
//           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
//         </svg>
//       </button>
//     </div>
//     <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
//       <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
//         <li>
//           <a className="block ml-24 px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Seguros</a>
//         </li>
//         <li>
//           <a className="block px-4 py-1 md:p-2 lg:px-4 text-purple-600" href="#" title="Active Link">Gestoría</a>
//         </li>
//         <li>
//           <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Compañías</a>
//         </li>
//       </ul>
//       <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
//         <li>
//           <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Inicio de sesión</a>
//         </li>
//         <li>
//           <a className="block px-4 py-1 md:p-2 lg:px-4" href="#" title="Link">Contacto</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav> 
//   );
// }

// export default Header;
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Menu } from "lucide-react";


import NavbarHeader from "./NavbarHeader";
import NavbarButton from "./NavbarButton";
// import Searcher from "../../atoms/searcher";
// import UserIcon from "../../atoms/userIcon";
// import UserHeaderMenu from "../../atoms/userHeaderMenu";

import { useState, useEffect } from "react";

function Header() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [closeMenuTimeOut, setCloseMenuTimeOut] = useState(null);

  const [isLogged, setIsLogged] = useState(false);

  const navigate = useNavigate();

  const headerMenuOptions = [
    {
      text: "Mi Cuenta",
      redirect: "/myAccount",
      dataTest: "link_mi-cuenta",
    },
    {
      text: "Mis eventos",
      redirect: "/my-events",
      dataTest: "link_mis_eventos",
    },
    {
      text: "Reservas",
      redirect: "/my-reservations",
      dataTest: "link_reservas",
    },
    {
      text: "Cerrar Sesión",
      onClick: () => {
        console.log("Clic en Cerrar Sesión");

      },
      dataTest: "link_cerrar-sesion",
    },
  ];




  const closeMenu = () => {
    let timeout = setTimeout(() => {
      setIsMenuToggled(false);
    }, 200);
    setCloseMenuTimeOut(timeout);
  };

  const renderLogSection = () => {
    if (isLogged) {
      return (
        <div className="relative flex items-center gap-2 justify-center w-fit">
          <button
            className="group flex focus:outline-none items-center gap-1"
            onClick={() => setIsMenuToggled((prev) => !prev)}
            onBlur={closeMenu}
            data-test="user_menu_toggle"
          >
            <UserIcon imgUrl={userInfo?.picture} />
            <span className="group-hover:text-secondary-3 group-focus:text-secondary-3">
              {userInfo?.names}
            </span>
            <ChevronLeft
              className={`transform ${
                isMenuToggled
                  ? "-rotate-90"
                  : "group-hover:-rotate-90 group-focus:-rotate-90"
              } transition-transform duration-300 ease-in-out`}
            />
          </button>
          {isMenuToggled && (
            <UserHeaderMenu
              options={headerMenuOptions}
              toCancelClose={closeMenuTimeOut}
              toCloseMenu={closeMenu}
            />
          )}
        </div>
      );
    }
    return (
      <div className="flex gap-4 justify-evenly w-fit">
        <NavbarButton
          filled={false}
          text={"Iniciar Sesión"}
          dataTest="Login"
        />
        <NavbarButton
          filled
          text={"Registrarse"}
          dataTest="signUp"
        />
      </div>
    );
  };

  return (
    <header className="w-full h-fit py-6 flex flex-col items-center justify-between bg-gradient-to-b from-black to-secondary-1 text-primary-1 sticky top-0 z-40 lg:flex-row">
      <div className="flex items-center justify-between w-full lg:w-fit lg:flex-grow-0">
        <picture
          onClick={() => navigate("/")}
          className="h-14 overflow-hidden ml-10 mb-4"
        >
          <img
            className="h-full w-auto object-contain"
            src="https://media.discordapp.net/attachments/1176511259093516384/1180139581736222870/image.png?ex=657c55a2&is=6569e0a2&hm=a399b0f29e8da2d1cd93c6d9d7330f9bced19efac8d73457bc1e30c779327a2b&=&format=webp&quality=lossless&width=606&height=160"
            alt="logo"
          />
        </picture>
        <button
          onClick={() => setIsMobileNav((prev) => !prev)}
          className="group w-10 h-10 mr-10 lg:hidden"
          aria-label="menu toggle"
          data-test="toggle_mobile_menu"
        >
          <Menu className="group-[:hover]:text-secondary-3 group-[:hover]:scale-110 group-[:focus]:text-secondary-3 group-[:focus]:scale-110 transition-transform transform duration-300 ease-out-expo w-full h-full" />
        </button>
      </div>
      {isMobileNav && (
        <div className="px-10 mt-1 pt-3 border-t-2 border-gray-500 flex flex-col gap-5 items-center lg:hidden">
          
          <NavbarHeader isLogged={isLogged} />
          {renderLogSection()}
        </div>
      )}
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:mr-10 lg:gap-5 lg:flex-grow">
        
        <NavbarHeader className={"lg:flex-grow"} isLogged={isLogged} />
        {renderLogSection()}
      </div>
    </header>
  );
}

export default Header;
