import NavBarItem from "./NavbarItem";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";
import { HiHome, HiBriefcase, HiPhone, HiMail } from "react-icons/hi"; 
import { FcHome } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcAutomotive,FcCollaboration,FcFeedback   } from "react-icons/fc";

function NavbarHeader({ className, isLogged }) {
  const items = [
    {
      text: "Inicio",
      textRed:"I",
      route: "/",
      dataTest: "link_inicio",
      icon: <FcHome className="w-10 h-10" />,
    },
    {
      text: "Asistencia al Viajero",
      textRed:"AV",
      route: "/asistencia",
      dataTest: "link_asistencia",
      icon: <FcAssistant className="w-10 h-10" />,
    },
    {
      text: "Seguros",
      textRed:"S",
      route: "/Seguros",
      dataTest: "link_crear-eventos",
      icon: <FcAutomotive className="w-10 h-10" />,
    },
    {
      text: "Gestoría",
      textRed:"G",
      route: "/Gestoria",
      dataTest: "link_quienes-somos",
      icon: <FcCollaboration  className="w-10 h-10" />,
    },
    {
      text: "Contacto",
      textRed:"C",
      route: "/Contacto",
      dataTest: "link_quienes-somos",
      icon: <FcFeedback  className="w-10 h-10" />,
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
        <img
            onClick={handleWhatsAppClick}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer ml-4 md:ml-3 w-10 h-10 hover:h-12 hover:w-12"
          />
      </ul>
    </nav>
  );
}

export default NavbarHeader;
