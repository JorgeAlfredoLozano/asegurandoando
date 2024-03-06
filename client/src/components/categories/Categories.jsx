import React from "react";
import { FaCarAlt, FaMotorcycle, FaTruckMoving, FaHome, FaStore, FaPlane } from "react-icons/fa";

const categories = [
  { icon: FaPlane, description: "Viajes"},
  { icon: FaCarAlt, description: "Autos" },
  { icon: FaMotorcycle, description: "Motos" },
  { icon: FaTruckMoving, description: "Transporte" },
  { icon: FaHome, description: "Hogar" },
  { icon: FaStore, description: "Comercio" }
];

export default function Categories() {
  return (
    <div className="bg-primary-4 flex flex-row items-center justify-center w-full flex-wrap h-auto">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center justify-between px-5 my-2">
          <div className="flex 2xl:h-16 2xl:w-16 xl:h-15 xl:w-15 flex-wrap bg-white p-3 rounded-full items-center justify-center shadow-md shadow-primary-3">
            <button>
              <category.icon className="xl:w-12 xl:h-12 w-12 h-12 p-1 text-primary-4" />
            </button>
          </div>
          <p className="mt-2 text-white">{category.description}</p>
        </div>
      ))}
    </div>
  );
}
