import { useNavigate } from "react-router-dom";

export const Card = (dataCard) => {
  const navigate = useNavigate();
    return (
      <div className="font-poppins overflow-hidden flex flex-col gap-3 p-3 shadow-md rounded-lg">
        <img
          className="w-full h-[350px] object-cover rounded-lg"
          src={dataCard.photo}
          alt="Imagen promo"
        />
        <div>
          <h1 className="text-primary-4 text-xl">{dataCard.title}</h1>
          <div className="flex flex-row items-center gap-2 text-primary-5 text-xs">
            <p>{dataCard.date}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
              {/* <circle cx="2.5" cy="2.5" r="2.5" fill="#828D9E" /> */}
            </svg>
            <p>{dataCard.location}</p>
          </div>
        </div>
        {console.log(dataCard.link)}
        <button onClick={() => navigate(`/${dataCard.link}`)} className="w-28 text-primary-4 text-sm font-semibold bg-transparent border border-primary-4 rounded-full px-6 py-2">
        Cotizar
      </button>
      </div>
    );
  };
  