import React from "react";
// import assistenciaImage from "https://img.freepik.com/foto-gratis/pareja-casa-junto-sentado-piso-computadora_1303-10157.jpg?w=740&t=st=1710196643~exp=1710197243~hmac=97e0b8f23a33c04708843b668589a5007a239172a8c32b109de5edfd3c9a661f";

const AcercaDe = () => {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Primer cuadrante: imagen */}
      <div className="p-4 lg:col-span-1">
        <img
          src="https://img.freepik.com/foto-gratis/pareja-casa-junto-sentado-piso-computadora_1303-10157.jpg?w=740&t=st=1710196643~exp=1710197243~hmac=97e0b8f23a33c04708843b668589a5007a239172a8c32b109de5edfd3c9a661f"
          alt="Asistencia al Viajero"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Segundo cuadrante: texto */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-semibold mb-4">Seguros Generales</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Bienvenido a nuestra sección de Seguros Generales, donde nos
          especializamos en ofrecerte una amplia gama de opciones para proteger
          lo que más valoras. Desde seguros para autos, hogar, motos, hasta
          coberturas para accidentes personales, salud, viajes, ART, y mucho
          más, estamos aquí para asegurarnos de que encuentres la protección
          adecuada para tus necesidades individuales. En un mundo lleno de
          imprevistos, entendemos la importancia de estar preparados y
          protegidos en todo momento. Es por eso que nos enorgullece ofrecer un
          servicio personalizado, donde puedes contactarnos a través de
          WhatsApp, correo electrónico o llamada telefónica para recibir una
          cotización adaptada a tus necesidades específicas. 
        </p>
      </div>

      {/* Tercer y cuarto cuadrante combinados */}
      <div className="lg:col-span-2">
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
        Nuestro equipo de
          expertos está disponible para brindarte un asesoramiento completo y
          personalizado, asegurándonos de que comprendas todas las opciones
          disponibles y encuentres el seguro que se ajuste perfectamente a tus
          requerimientos y presupuesto. Con respecto a los viajes, nos
          especializamos en ofrecerte la tranquilidad que necesitas mientras
          estás lejos de casa. Nos encargamos exclusivamente de proporcionarte
          la mejor asistencia al viajero, asegurándonos de que estés protegido
          ante cualquier eventualidad durante tus aventuras en el extranjero. No
          dejes la seguridad de lo que más valoras al azar. 
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
        Únete a nosotros y
          descubre cómo podemos ayudarte a proteger tu futuro hoy mismo.
        </p>
      </div>
    </div>
  );
};

export default AcercaDe;
