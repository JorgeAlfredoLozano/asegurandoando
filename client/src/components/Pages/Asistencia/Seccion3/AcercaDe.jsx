import React from "react";
import assistenciaImage from "../../../../assets/AsistenciaAcercaDe.jpg";

const AcercaDe = () => {
  return (
    <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Primer cuadrante: imagen */}
      <div className="p-4 lg:col-span-1">
        <img
          src={assistenciaImage}
          alt="Asistencia al Viajero"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Segundo cuadrante: texto */}
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-semibold mb-4">Asistencia al Viajero</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Es un conjunto de servicios que se ofrece a manera de “coberturas”.
          Cada plan de asistencia puede tener coberturas adicionales y varía en
          los montos de dinero asignados. De todas formas, las coberturas
          básicas que encontrarás son:
        </p>
        <ul className="list-disc ml-6 text-lg text-gray-700 leading-relaxed mt-2">
          <li>Asistencia médica</li>
          <li>Asistencia odontológica de urgencia</li>
          <li>Traslados médicos</li>
          <li>Repatriación sanitaria</li>
          <li>Gastos de hotel por convalecencia</li>
          <li>Traslado y estancia de un familiar</li>
          <li>Asistencia en caso de robo o extravío de documentos</li>
          <li>Localización de equipaje</li>
          <li>Entre otros</li>
        </ul>
      </div>

      {/* Tercer y cuarto cuadrante combinados */}
      <div className="lg:col-span-2">
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Previene gastos inesperados! En cualquier viaje puede surgir un
          imprevisto y desde Assist Card queremos que siempre viajes con
          tranquilidad. Recuerda que ante una emergencia médica los costos de
          atención en el exterior pueden sumarte gastos que no estaban
          contemplados en tu presupuesto de viaje.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Por ejemplo, apendicitis sin complicación en Estados Unidos puede
          costar entre 20.000 y 30.000 USD y un trauma no quirúrgico (lesiones
          leves, afectaciones de la piel, caídas, accidentes de baja gravedad)
          entre 5.000 – 8.000 USD. En Europa, puedes llegar a pagar hasta 10.000
          USD por un trauma que requiera intervención quirúrgica o cirugía.
        </p>
      </div>
    </div>
  );
};

export default AcercaDe;
