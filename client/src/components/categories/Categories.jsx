import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCarAlt, FaMotorcycle, FaTruckMoving, FaHome, FaStore, FaPlane,FaPeopleCarry  } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";

const categories = [
  { icon: FaPlane, description: "Viajes", link: "/asistencia" },
  { icon: FaCarAlt, description: "Autos", link: "/autos" },
  { icon: FaMotorcycle, description: "Motos", link: "/autos" },
  { icon: FaTruckMoving, description: "Transporte", link: "/transporte" },
  { icon: FaHome, description: "Hogar", link: "/hogar" },
  { icon: FaStore, description: "Comercio", link: "/comercio" },
  { icon: FaPeopleCarry, description: "AP", link: "/ap" },
  { icon: GiHealthCapsule, description: "Salud", link: "/salud" },
];

const Categories = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  // Estado para controlar el ícono que está siendo hover
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="bg-primary-4 flex flex-row items-center justify-center w-full flex-wrap h-auto">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center justify-between px-5 my-2">
          <div 
            className={`flex 2xl:h-16 2xl:w-16 xl:h-15 xl:w-15 flex-wrap bg-white p-3 rounded-full items-center justify-center shadow-md shadow-primary-3 
            ${hoveredIcon === category.description ? 'transform scale-110' : ''}`} // Aplicar escala aumentada cuando el ícono está siendo hover
            onMouseEnter={() => setHoveredIcon(category.description)} // Establecer el ícono como hover cuando el mouse entra
            onMouseLeave={() => setHoveredIcon(null)} // Restablecer el ícono cuando el mouse sale
            style={{ transition: 'background-color 0.3s ease' }} // Agregar transición para suavizar el efecto
          >
            <Link to={category.link}>
              <category.icon 
                className={`xl:w-12 xl:h-12 w-12 h-12 p-1 text-primary-4 ${hoveredIcon === category.description ? 'text-blue-500 bg-blue-100 bg-opacity-0' : ''}`} // Aplicar color azul y transparencia al 0% cuando el ícono está siendo hover
              />
            </Link>
          </div>
          <p className="mt-2 text-white">{category.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
