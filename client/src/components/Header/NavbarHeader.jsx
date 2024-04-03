import NavBarItem from "./NavbarItem";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";
import menuInicio from "../../assets/menu-inicio.png";
import menuAsistencia from "../../assets/menu-asistencia.png";
import menuSeguros from "../../assets/menu-seguros.png";
import menuGestoria from "../../assets/menu-gestoria.png";
import menuContacto from "../../assets/menu-contacto.png";
import React, { useState, useEffect } from "react";

function NavbarHeader({ className, isLogged }) {
  const items = [
    {
      text: "Inicio",
      textRed:"Inicio",
      route: "/",
      dataTest: "link_inicio",
      icon: <img src={menuInicio} className="w-10 h-10" />,
    },
    {
      text: "Asistencia al Viajero",
      textRed:"Asistencia",
      route: "/asistencia",
      dataTest: "link_asistencia",
      icon: <img src={menuAsistencia} className="w-10 h-10" />,
    },
    {
      text: "Seguros",
      textRed:"Seguros",
      route: "/Seguros",
      dataTest: "link_crear-eventos",
      icon: <img src={menuSeguros} className="w-10 h-10" />,
    },
    {
      text: "Gestoría",
      textRed:"Gestoría",
      route: "/Gestoria",
      dataTest: "link_quienes-somos",
      icon: <img src={menuGestoria}  className="w-10 h-10" />,
    },
    {
      text: "Contacto",
      textRed:"Contacto",
      route: "/Contacto",
      dataTest: "link_quienes-somos",
      icon: <img src={menuContacto}  className="w-10 h-10" />,
    },
  ];
  const navigate = useNavigate();
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492281531457";
    const message = "";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };
  const renderNavItems = () => {

    const noLogged = items.filter((item) => item.text != "Crear Eventos");
    return noLogged.map((item) => (
      <NavBarItem
        key={item.route}
        text={item.text}
        textRed={item.textRed}
        route={item.route}
        dataTest={item.dataTest}
        icon={item.icon}
      />
    ));
  };
  return (
    <nav className={`${className}`}>
      <ul
        className={`list-none flex gap-5 items-center justify-evenly flex-wrap lg:justify-center`}
      >
        {renderNavItems()}
        {!isMobile ? (<img
            onClick={handleWhatsAppClick}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer ml-4 md:ml-3 w-10 h-10 hover:h-12 hover:w-12"
          />):(null)}
      </ul>
    </nav>
  );
}

export default NavbarHeader;
