import React, { useRef } from "react";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { Card } from "../navbarItem/cards";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";
import image6 from "../../assets/6.png";

export default function Promociones() {
  const cardData = [
    {
      photo: image1,
      title: "",
      date: "",
      link: "autos",
    },
    {
      photo: image2,
      title: "",
      date: "",
      link: "autos",
    },
    {
      photo: image3,
      title: "",
      date: "",
      location: "",
    },
    {
      photo: image4,
      title: "",
      date: "",
      location: "",
    },
    {
      photo: image5,
      title: "",
      date: "",
      location: "",
    },
    {
      photo: image6,
      title: "",
      date: "",
      location: "",
    },
  ];

  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center mb-4 font-poppins font-medium">
        <button
          className="flex items-center"
          onClick={handleScrollLeft}
          disabled={scrollRef.current?.scrollLeft === 0}
        >
          <MdArrowLeft size={40} />
        </button>
        <div
  ref={scrollRef}
  className="flex space-x-4 overflow-x-auto hide-scrollbar"
  style={{
    maxWidth: "1200px",
    "-webkit-overflow-scrolling": "touch", // Habilitar desplazamiento táctil para iOS
    "&::-webkit-scrollbar": { // Ocultar la barra de desplazamiento en WebKit (Chrome, Safari)
      display: "none",
    },
  }}
>

          {cardData.map((data, index) => (
            <div key={index} className="flex-shrink-0 w-64">
              <Card {...data} />
            </div>
          ))}
        </div>
        <button
          className="flex items-center"
          onClick={handleScrollRight}
          disabled={
            scrollRef.current?.scrollLeft ===
            scrollRef.current?.scrollWidth - scrollRef.current?.offsetWidth
          }
        >
          <MdArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}
