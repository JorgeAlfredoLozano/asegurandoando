import React from "react";
import { useNavigate } from "react-router-dom";
import { HiHome, HiBriefcase, HiPhone, HiMail } from "react-icons/hi"; // Importa los íconos de react-icons
import whatsappIcon from "../../assets/whatsapp-icon.png";
import NavBarItem from "./NavbarItem";

function NavbarHeader({ className, isLogged }) {
  const items = [
    {
      text: "Inicio",
      route: "/",
      dataTest: "link_inicio",
      icon: <HiHome className="w-6 h-6" />, // Icono para Inicio
    },
    {
      text: "Asistencia al Viajero",
      route: "/asistencia",
      dataTest: "link_asistencia",
      icon: <HiBriefcase className="w-6 h-6" />, // Icono para Asistencia al Viajero
    },
    {
      text: "Seguros",
      route: "/Seguros",
      dataTest: "link_crear-eventos",
      icon: <HiBriefcase className="w-6 h-6" />, // Icono para Seguros
    },
    {
      text: "Gestoría",
      route: "/Gestoria",
      dataTest: "link_quienes-somos",
      icon: <HiBriefcase className="w-6 h-6" />, // Icono para Gestoría
    },
    {
      text: "Contacto",
      route: "/Contacto",
      dataTest: "link_quienes-somos",
      icon: <HiMail className="w-6 h-6" />, // Icono para Contacto
    },
  ];

  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492281531457";
    const message = "";
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const renderNavItems = () => {
    // if (isLogged) {
    //   return items.map((item) => (
    //     <NavBarItem
    //       key={item.route}
    //       text={item.text}
    //       route={item.route}
    //       dataTest={item.dataTest}
    //       icon={item.icon}
    //     />
    //   ));
    // }
    const noLogged = items.filter((item) => item.text !== "Crear Eventos");
    console.log("noLogged", noLogged)
    return noLogged.map((item) => {
      console.log("item:", item); // Agregar el console.log aquí para ver los elementos
      return (
        <NavBarItem
          key={item.route}
          text={item.text}
          route={item.route}
          dataTest={item.dataTest}
          icon={item.icon}
        />
      );
    });
    
  };

  return (
    <nav className={`${className}`}>
      <ul className={`list-none flex gap-5 items-center justify-evenly flex-wrap lg:justify-center`}>
        {renderNavItems().map(({ text, route, dataTest, icon }) => (
          <li key={route}>
            <NavBarItem text={text} route={route} dataTest={dataTest} icon={icon} />
          </li>
        ))}
        <li>
          <img
            onClick={handleWhatsAppClick}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer ml-4 md:ml-3 w-8 h-8 hover:h-12 hover:w-12"
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavbarHeader;
