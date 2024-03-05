import { MdArrowRight } from "react-icons/md";
import { Card } from "../navbarItem/cards";
import image1 from "../../assets/2x1assist.png";
import image2 from "../../assets/todoriesgo.png";
import image3 from "../../assets/motos.png";
import image4 from "../../assets/AP.png";

export default function promociones (){

    const cardData = [{
        photo: image1,
        title: '2x1 con Assist Card',
        date: 'hasta 29 de febrero de 2024',
        location: 'Assist Card',
      },
      {
        photo: image2,
        title: 'hasta 70% OFF',
        date: 'hasta 30 de marzo de 2024',
        location: 'Sancor Seguros',
      },
      {
        photo: image3,
        title: 'cuotas fijas',
        date: 'hasta 30 de marzo de 2024',
        location: 'Copán Seguros',
      },
      {
        photo: image4,
        title: 'Protección para el trabajador',
        date: 'hasta 30 de marzo de 2024',
        location: 'Sancor Seguros',
      }]

      const renderedCards = cardData.map((data, index) => (
        <Card key={index} {...data} />
      ));

    return (
        <div className="p-20 bg-white">
            <h1 className="text-3xl font-medium mb-5">Descuentos y Beneficios</h1>
            <div className="flex justify-end mb-4 font-poppins font-medium">
                <button className="flex items-center">
                    Ver todo <MdArrowRight size={20} />
                </button>
            </div>
            <div className="w-full flex flex-row gap-3">
                {renderedCards}
            </div>
        </div>
    )
}