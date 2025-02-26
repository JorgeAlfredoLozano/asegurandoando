const SSNFooterWeb = () => {
    return (
      <div className="bg-white w-full h-auto flex flex-col items-center font-roboto text-[13px]">
        {/* Línea superior */}
        <hr className="mt-4 w-full border-t border-gray-300" />
  
        {/* Contenedor de la tabla */}
        <div className="w-full max-w-screen-xl px-4">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                {/* Primera columna (más pequeña) */}
                <td className="w-[15%] px-2 text-center">
                  <p>N° de matrícula SSN</p>
                  <p>81581</p>
                </td>
  
                {/* Separador (no ocupa todo el alto) */}
                <td className="w-1">
                  <div className="h-10 border-r border-gray-300 mx-auto"></div>
                </td>
  
                {/* Segunda columna (tabla interna de 2 columnas) */}
                <td className="w-[40%] px-4 text-center">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-1/2 text-right pr-2">
                          Departamento de Orientación y Asistencia al Asegurado
                        </td>
                        <td colSpan="2" className="text-blue-500 text-center pt-1">
                          0800-666-8400
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
  
                {/* Separador (no ocupa todo el alto) */}
                <td className="w-1">
                  <div className="h-10 border-r border-gray-300 mx-auto"></div>
                </td>
  
                {/* Tercera columna (tabla interna de 2 columnas) */}
                <td className="w-[45%] px-4">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="text-right pr-2">
                          <a href="https://www.argentina.gob.ar/ssn" className="text-blue-500 text-[14px]">
                            www.argentina.gob.ar/ssn
                          </a>
                        </td>
                        <td className="text-left pl-2">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/SSN_Argentina_logo.png"
                            alt="Logo SSN"
                            className="w-auto h-auto"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default SSNFooterWeb;
  