import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarHeader from "./NavbarHeader";
import logo from "../../assets/LOGOweb.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";

const Header = () => {
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

  return (
    <nav
      className="bg-gradient-to-b from-black to-secondary-1 text-primary-1 shadow"
      role="navigation"
    >
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a href="/" rel="home">
            <img src={logo} alt="Asegurando Ando" className="w-50 h-20" />
          </a>
        </div>
        {isMobile ? (<img
            onClick={handleWhatsAppClick}
            src={whatsappIcon}
            alt="WhatsApp"
            className="cursor-pointer ml-12 md:ml-3 w-14 h-14 hover:h-12 hover:w-12"
          />) : null}
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          <NavbarHeader className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0" />
        </div>

      </div>
    </nav>
  );
};

export default Header;
