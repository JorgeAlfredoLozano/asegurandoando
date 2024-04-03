import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

function NavbarItem({ text, textRed, route, dataTest = '', icon }) {
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
    <li className="hover:scale-110 transition-transform duration-300 ease-out-expo w-fit">
      <NavLink to={route} className="group focus:outline-none" id={`test-${dataTest}`}>
        {!isMobile ? ( <span
          className={`group-[.active]:text-secondary-3 group-[.active]:border-b-2 rounded-md border-secondary-2 group-[.active]:font-semibold text-primary-1 text-center px-1 group-focus:text-secondary-3 group-hover:text-secondary-3`}
        >{text}
        </span>) : (
          <div>
          <span className="flex justify-center inline-block">{icon}</span>
          <span className="mt-2 flex justify-center">{textRed}</span>
        </div>
        )}  
      </NavLink>
    </li>
  );
}

export default NavbarItem;
