export default function SSNFooter() {
    return (
      <div className="w-full bg-gray-200 py-4 mt-8 text-center text-[14px] leading-[18px] text-gray-700">
        <p className="font-bold">Juan Pérez - Productor Asesor de Seguros</p>
        <p>Inscripto en SSN bajo el N° XXXXX</p>
        <p>
          Superintendencia de Seguros de la Nación – Para consultas y reclamos llame al{" "}
          <span className="font-bold">0800-666-8400</span> –{" "}
          <a href="https://www.argentina.gob.ar/ssn" className="underline">
            www.argentina.gob.ar/ssn
          </a>
        </p>
      </div>
    );
  }
  