import React from "react";
import { MdArrowRight } from "react-icons/md";
import { Card } from "../../../navbarItem/cards";
import image1 from "../../../../assets/assist.png";
import image2 from "../../../../assets/coris.png";
import image3 from "../../../../assets/europ.png";
import image4 from "../../../../assets/pax.png";

export default function PromocionesSection() {
  const cardData = [
    {
      photo: image1,
    },
    {
      photo: image2,
    },
    {
      photo: image3,
    },
    {
      photo: image4,
    },
  ];

  const renderedCards = cardData.map((dataCard, index) => (
    <div className="font-poppins overflow-hidden flex-col gap-3 p-3 shadow-md rounded-lg" key={index}>
      <img
        className="object-cover w-full max-h-40 md:max-h-48 rounded-lg bg-blue-900"
        src={dataCard.photo}
        alt="Imagen promo"
      />
      <div></div>
    </div>
  ));

  return (
    <div className="py-1 p-10 bg-white mt-12">
      <h1 className="text-2xl font-medium mb-5">Partners</h1>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {renderedCards}
      </div>
    </div>
  );
}
