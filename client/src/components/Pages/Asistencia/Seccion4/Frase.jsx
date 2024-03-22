import fondo from "../../../../assets/mundo.png";

const Frase = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center md:h-screen">
      <div className="h-full">
        <img
          className="object-cover rounded-lg bg-blue-900"
          src={fondo}
          alt="Imagen promo"
        />
      </div>
    </div>
  );
}

export default Frase;
