const SSNFooterMobile = () => {
    return (
      <div className="bg-white w-full h-auto flex flex-col items-center font-roboto text-[13px] p-4">
        {/* Línea superior */}
        <hr className="w-full border-t border-gray-300 mb-4" />
  
        {/* Primera sección: Matrícula */}
        <div className="text-center mb-3">
          <p className="font-bold">N° de matrícula SSN</p>
          <p>81581</p>
        </div>
        
        {/* Separador */}
        <hr className="border-gray-300 w-full my-2" />
  
        {/* Segunda sección: Departamento de orientación */}
        <div className="text-center mb-3">
          <p>Departamento de Orientación y Asistencia al Asegurado</p>
          <p className="text-blue-500 font-bold mt-1">0800-666-8400</p>
        </div>
        
        {/* Separador */}
        <hr className="border-gray-300 w-full my-2" />
  
        {/* Tercera sección: Enlace y logo */}
        <div className="flex flex-col items-center">
          <a href="https://www.argentina.gob.ar/ssn" className="text-blue-500 text-[14px] mb-2">
            www.argentina.gob.ar/ssn
          </a>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/SSN_Argentina_logo.png"
            alt="Logo SSN"
            className="w-auto h-auto"
          />
        </div>
      </div>
    );
  };
  
  export default SSNFooterMobile;
  