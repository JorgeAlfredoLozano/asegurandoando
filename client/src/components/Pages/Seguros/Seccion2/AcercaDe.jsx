import React from "react";
import Contacto from "../../Contacto/Contacto";
import lau from "../../../../assets/laura.jpg";

export default function AcercaDe() {
  return (
    <>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/foto-gratis/amigos-revisando-mapa-viaje_23-2148320238.jpg?t=st=1712692181~exp=1712695781~hmac=d4a7848c5a5b93741790d10f62c7940d385bfedc36f88fd0801634de38279b0a&w=740')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-55 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Seguros Generales
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    VIAJES | AUTOS | CASAS | COMERCIOS | AP
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-300">
                      <i className="fas fa-award text-xl">V</i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Asistencia al Viajero
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      En nuestra empresa, colaboramos estrechamente con las
                      principales compañías de asistencia al viajero para
                      ofrecerte tranquilidad durante tu estancia en el
                      extranjero. Nuestra asociación con los líderes del sector
                      garantiza que puedas disfrutar de tu viaje sin
                      preocupaciones, sabiendo que estás protegido ante
                      cualquier imprevisto. Tu seguridad y bienestar son nuestra
                      prioridad, por eso trabajamos incansablemente para
                      brindarte la mejor atención y respaldo durante tu aventura
                      en el exterior.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet text-xl">P</i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Seguros Patrimoniales
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      En nuestro servicio de seguros patrimoniales, trabajamos
                      con las principales compañías del sector para ofrecerte
                      una protección integral. Desde seguros para autos, motos,
                      camiones, casas, hasta seguros para comercios, accidentes
                      personales y de salud, nos aseguramos de que tu patrimonio
                      esté completamente protegido. Con nuestra amplia gama de
                      opciones y el respaldo de las mejores aseguradoras, puedes
                      tener la tranquilidad de saber que estás cubierto ante
                      cualquier eventualidad, permitiéndote vivir con seguridad
                      y confianza en tu día a día.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-200">
                      <i className="fas fa-fingerprint text-xl">S</i>
                    </div>
                    <h6 className="text-xl font-semibold">Seguros de Salud</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      En nuestro servicio de seguros de salud, nos enfocamos en
                      brindarte una cobertura completa que incluye transplantes,
                      prótesis y operaciones. Trabajamos para garantizar que
                      tengas acceso a la atención médica que necesitas cuando
                      más lo necesitas. Con nuestra amplia gama de opciones y el
                      respaldo de las principales compañías aseguradoras, puedes
                      confiar en que estaremos a tu lado para cuidar de tu salud
                      y bienestar en todo momento. Tu tranquilidad es nuestra
                      prioridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-26 mb-16">
              <div className="w-full md:w-2/3 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl">OV</i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Oficina Virtual
                </h3>

                <p className="text-lg font-light leading-relaxed mt-4 mb-2 text-gray-700">
                  En nuestra oficina virtual, nos dedicamos a garantizar tu
                  seguridad, la de tu familia y la de tus bienes. Te ofrecemos
                  una amplia gama de productos y seguros diseñados para
                  satisfacer tus necesidades específicas. Nuestra metodología de
                  trabajo te permite acceder a nuestros servicios desde la
                  comodidad de tu hogar u oficina. A través de nuestra
                  plataforma en línea, podrás recibir asesoramiento
                  personalizado, evaluar diferentes opciones y contratar la
                  póliza que mejor se adapte a tus necesidades y posibilidades,
                  todo sin tener que moverte de donde estás. Tu tranquilidad es
                  nuestra prioridad, y estamos aquí para facilitarte el proceso
                  y brindarte la protección que mereces.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-16 text-gray-700">
                  Con mi amplia experiencia y profundo conocimiento del sistema,
                  me encargo de todos los aspectos relacionados con la
                  documentación de vehículos. Desde la inscripción inicial hasta
                  la obtención de cédulas autorizadas y la resolución de
                  cualquier inconveniente que pueda surgir, estoy aquí para
                  brindarte un servicio integral, ágil y confiable. Mi objetivo
                  es que puedas dedicar más tiempo a lo que realmente importa:
                  conducir con seguridad y disfrutar plenamente de tu vehículo.
                </p> */}
                <a
                  className="font-bold text-gray-800 mt-1 mb-16 block mx-auto"
                  style={{ width: "fit-content" }}
                >
                  Gracias por confiar en nosotros!
                </a>
              </div>

              <div className="w-full md:w-1/3 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src={lau}
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      María Laura Lobrundo
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Productor Asesor de Seguros
                    </p>
                    <p className="text-md font-light mt-2 text-white">
                      Mat 81581
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 relative block mx-auto py-38 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-3/4 px-4">
                <div className="block mx-auto flex flex-col min-w-0 break-words w-full mt-12 mb-6 shadow-lg rounded-lg bg-gray-300">
                  <Contacto />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
