"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PriceCard = ({
  color,
  type,
  // price,
  features,
  isPopular = false,
  // mensualidad,
  noIncluye,
  onDefaultMessageChange,
}) => {
  let borderColor = "";
  let borderColorHover = "";
  let textColor = "";
  let darkBorderColor = "";
  let darkTextColor = "";
  let buttonColor = "";

  switch (color) {
    case "gray":
      borderColor = "border-gray-600";
      borderColorHover = "hover:border-gray-300 dark:hover:border-gray-300";
      textColor = "text-gray-900";
      darkBorderColor = "dark:border-gray-500";
      darkTextColor = "dark:text-white ";
      buttonColor =
        "dark:bg-gray-800 bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-700";
      break;
    case "yellow":
      borderColor = "border-yellow-800";
      borderColorHover = "hover:border-yellow-400 dark:hover:border-yellow-300";
      textColor = "text-yellow-900";
      darkBorderColor = "dark:border-yellow-500";
      darkTextColor = "dark:text-white";
      buttonColor =
        "dark:bg-yellow-800 bg-yellow-800 hover:bg-yellow-900 dark:hover:bg-yellow-700";
      break;
    case "emerald":
      borderColor = "border-emerald-800";
      borderColorHover =
        "hover:border-emerald-400 dark:hover:border-emerald-300";
      textColor = "text-emerald-900";
      darkBorderColor = "dark:border-emerald-500";
      darkTextColor = "dark:text-white";
      buttonColor =
        "dark:bg-emerald-800 bg-emerald-800 hover:bg-emerald-900 dark:hover:bg-emerald-700";
      break;
    case "purple":
      borderColor = "border-purple-800";
      borderColorHover = "hover:border-purple-400 dark:hover:border-purple-300";
      textColor = "text-purple-900";
      darkBorderColor = "dark:border-purple-500";
      darkTextColor = "dark:text-white";
      buttonColor =
        "dark:bg-purple-800 bg-purple-700 hover:bg-purple-800 dark:hover:bg-purple-700";
      break;
    default:
      break;
  }
  const route = useRouter();

  const [formaPago, setFormaPago] = useState("mensual");

  // Función para manejar el cambio en la forma de pago
  const handleFormaPagoChange = (event) => {
    const nuevaFormaPago = event.target.value;
    setFormaPago(nuevaFormaPago);
  };

  const handleClick = () => {
    const message = `Hola, estoy interesado en el plan ${type}, ¿me brindas más información? ¡Gracias!`;
    onDefaultMessageChange(message);

    route.push("#contact");
  };

  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures);
  };


  // Definir precios y mensualidades por tipo de tarjeta
  const preciosPorTarjeta = {
    PLATA: {
      mensual: { price: 100, mensualidad: 30 }, // total 460 
      contado: { price: 300, mensualidad: 0 }, // total 300
      mixto: { price: 180, mensualidad: 20 }, // total 360
    },
    ORO: {
      mensual: { price: 150, mensualidad: 50 }, // total 750
      contado: { price: 500, mensualidad: 0 }, // total 500
      mixto: { price: 300, mensualidad: 30 }, // total 660 
    },
    ESMERALDA: {
      mensual: { price: 500, mensualidad: 250 }, // total 3500
      contado: { price: 2500, mensualidad: 0 }, // total 2500
      mixto: { price: 800, mensualidad: 200 }, // total 3000
    },
    DIAMANTE: {
      mensual: { price: 1000, mensualidad: 500 }, // total 7000
      contado: { price: 5000, mensualidad: 0 }, // total 5000
      mixto: { price: 1800, mensualidad: 400 }, // total 6600
    },
  };

    // Obtener los precios y mensualidades según la forma de pago seleccionada
    const { price, mensualidad } = preciosPorTarjeta[type][formaPago];


  return (
    <div className={`p-4 xl:w-1/4 md:w-1/2 w-full `} >
      <div
        className={`h-full p-6 rounded-lg border-2 ${borderColor} ${borderColorHover} ${darkBorderColor} flex flex-col overflow-hidden shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-xs bg-white px-8 py-10`}
      >
        {isPopular && (
          <span className="bg-green-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2
          className={`text-xl tracking-widest title-font mb-1 font-medium ${textColor} ${darkTextColor} `}
        >
          {type}
        </h2>

            {
            type == 'PLATA' && 
            <small className="dark:text-gray-400">
                        Este paquete es especial para emprendimietos que estan surgiendo, buscan expandir su negocio y generar credibilidad.
                    </small>
            }
            {
            type == 'ORO' && 
            <small className="dark:text-gray-400">
                        Este paquete es especial para emprendimietos que estan surgiendo, con mayores ventas mes a mes, y que buscan dar mas credibilidad a su negocio.
                    </small>
            }
            {
            type == 'ESMERALDA' && 
            <small className="dark:text-gray-400">
                        Este paquete es especial para emprendimientos/empresas mas consolidadas que buscan brindar una mejor atencion al cliente asi como una forma más atractiva de promocionar sus productos.
                    </small>
            }
            {
            type == 'DIAMANTE' && 
            <small className="dark:text-gray-400">
                        Este paquete es especial para empresas ya consolidadas, con ingresos altos que desean automatizar procesos dentro y fuera de la empresa y así brindar un mejor servicio para competir en el mercado actual.
                    </small>
            } 


        {/* Agregar la selección de forma de pago con botones de radio */}
        <small className="mb-3  text-gray-900 dark:text-white mt-3">Formas de Pago</small>
        <ul className="grid w-full gap-6 grid-cols-3 mb-3 ">

        <li>
            <input type="radio" id={`contado-${type}`} name={`formaPago-${type}`} value="contado" className="hidden peer" checked={formaPago === "contado"} onChange={handleFormaPagoChange} />
            <label htmlFor={`contado-${type}`} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-transparent border border-gray-700 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-gray-300 peer-checked:border-blue-600 peer-checked:text-gray-200 peer-checked:bg-blue-800 hover:text-gray-600 hover:bg-gray-400 dark:text-gray-400 dark:bg-transparent dark:hover:bg-gray-800">                           
              <div className="w-full flex">
                <div className="w-full text-base font-semibold xs:text-xs text-center">Contado</div>
                {/* <div className="w-full text-xs">Pago único</div> */}
              </div>
            </label>
          </li>

          <li>
            <input type="radio" id={`mensual-${type}`} name={`formaPago-${type}`} value="mensual" className="hidden peer" checked={formaPago === "mensual"} onChange={handleFormaPagoChange} />
            <label htmlFor={`mensual-${type}`} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-transparent border border-gray-700 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-gray-300 peer-checked:border-blue-600 peer-checked:text-gray-200 peer-checked:bg-blue-800 hover:bg-gray-400 dark:text-gray-400 dark:bg-transparent dark:hover:bg-gray-800">                           
              <div className="w-full flex">
                <div className="w-full text-base font-semibold xs:text-xs text-center">Mensual</div>
                {/* <div className="w-full text-xs">Pago mensual</div> */}
              </div>
            </label>
          </li>
          
          <li>
            <input type="radio" id={`mixto-${type}`} name={`formaPago-${type}`} value="mixto" className="hidden peer" checked={formaPago === "mixto"} onChange={handleFormaPagoChange} />
            <label htmlFor={`mixto-${type}`} className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-transparent border border-gray-700 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:peer-checked:text-gray-300 peer-checked:border-blue-600 peer-checked:text-gray-200 peer-checked:bg-blue-800 hover:text-gray-600 hover:bg-gray-400 dark:text-gray-400 dark:bg-transparent dark:hover:bg-gray-800">
              <div className="w-full flex">
                <div className="w-full text-base font-semibold xs:text-xs text-center">Mixto</div>
                {/* <div className="w-full text-xs">Pago mixto</div> */}
              </div>
            </label>
          </li>
        </ul>


        <h1
          className={`text-5xl ${darkTextColor} ${textColor} leading-none flex items-center pb-1 mb-1`}
        >
          <span
          className={`text-sm ml-1 font-normal text-gray-500`}
        >
          Pago inicial:
        </span>

          <span className={'ml-4'}>${price}</span>
        </h1>

        {/* <span
          className={`text-lg ml-1 font-normal text-gray-500 border-b ${darkBorderColor} ${borderColor}  w-full pb-2 mb-2`}
        >
          <span
            className={`text-sm ml-1 font-normal text-gray-500`}
          >
            Pago mensual:
          </span>

          ${mensualidad}
        </span> */}

        <h1
          className={`text-lg ml-1 font-normal text-gray-500 border-b ${darkBorderColor} ${borderColor}  w-full pb-2 mb-2`}
        >
          <span
          className={`text-sm ml-1 font-normal text-gray-500`}
        >
          Pago mensual:
        </span>

          <span className={'ml-4'}>${mensualidad}</span>
        </h1>

        {showFeatures ? (
          <div>
            {features.map((feature, index) => (
              <div key={index}>
                <p
                  key={index}
                  className={`flex items-center ${darkTextColor} text-gray-900 mb-2`}
                >
                  <span
                    className={`w-6 h-6 mr-2 inline-flex items-center justify-center ${
                      feature.isIncluded ? "bg-green-500" : "bg-red-500"
                    } text-white rounded-full flex-shrink-0`}
                  >
                    {feature.isIncluded ? (
                      <svg
                        fill="none"
                        stroke="green"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    ) : (
                      <svg
                        fill="none"
                        stroke="red"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 18L18 6M6 6l12 12"></path>{" "}
                      </svg>
                    )}
                  </span>
                  <span>{feature.title}</span>
                </p>
                <li className={`text-xs ${darkTextColor} text-gray-800 mb-2 `}>
                  <span
                    className={`text-xs ${darkTextColor} text-gray-800 mb-2 `}
                  >
                    {feature.description}
                  </span>
                </li>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {features.map((feature, index) => (
              <p
                key={index}
                className={`flex items-center ${darkTextColor} text-gray-900 mb-2`}
              >
                <span
                  className={`w-6 h-6 mr-2 inline-flex items-center justify-center ${
                    feature.isIncluded ? "bg-green-500" : "bg-red-500"
                  } text-white rounded-full flex-shrink-0`}
                >
                  {feature.isIncluded ? (
                    <svg
                      fill="none"
                      stroke="green"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  ) : (
                    <svg
                      fill="none"
                      stroke="red"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 18L18 6M6 6l12 12"></path>{" "}
                    </svg>
                  )}
                </span>
                <span>{feature.title}</span>
              </p>
            ))}
          </div>
        )}

        <button
          className={`text-sm text-blue-500 mt-3 mb-3 cursor-pointer focus:outline-none`}
          onClick={toggleFeatures}
        >
          {showFeatures ? "Ocultar descripciones" : "Mostrar descripciones"}
        </button>

        <button
          onClick={handleClick}
          className={`flex items-center mt-auto text-white ${darkTextColor}  ${buttonColor}  border-0 py-2 px-4 w-full focus:outline-none  rounded`}
        >
          Me interesa. ¡Contactar!
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-auto transform rotate-90"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
        <p className={`text-xs text-gray-800 ${darkTextColor} mt-3`}>
          El precio anterior ($
          <b>{price}</b>) es la base y puede variar dependiendo de sus necesidades,
          es decir, agregar más funcionalidades hará que el precio aumente.
        </p>



<div className="absolute right-30 bottom-60 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>


<div className="absolute right-60 top-0 z-[-1]">
          <svg
            width="179"
            height="158"
            viewBox="0 0 179 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4584a8" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4584a8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>



    </div>
  );
};

// export default PriceCard;



const Prices = ({ onDefaultMessageChange }) => (
  <section id="prices" className="flex justify-center items-center h-full flex-col text-black">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-3xl md:text-5xl font-bold dark:text-gray-200">
          Planes y Precios
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg text-gray-700 mt-4 dark:text-white">
          Selecciona el plan que mejor se adapte a las necesidades de tu negocio. Todos nuestros planes son personalizables y podemos ajustarlos según tus requerimientos específicos.
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
        </div>
      </div>
      <div className="flex flex-wrap -m-4">
        <PriceCard
          onDefaultMessageChange={onDefaultMessageChange}
          color={"gray"}
          type="PLATA"
        //   price="60"
        //   mensualidad="30"
          features={[
            {
              title: "Página web con 4 secciones",
              isIncluded: true,
              description:
                "Diseñamos y desarrollamos una página web con hasta 4 secciones, adaptada a tus necesidades.",
            },
            {
              title: "Colores y diseño a elegir",
              isIncluded: true,
              description:
                "Personalizamos los colores y el diseño de la página según tus preferencias y estilo de marca.",
            },
            {
              title: "Formulario de contacto",
              isIncluded: true,
              description:
                "Incluimos un formulario de contacto para que tus visitantes puedan enviarte mensajes fácilmente.",
            },
            {
              title: "Hosting/Dominio",
              isIncluded: true,
              description:
                "Se incluye un hosting y un dominio gratuito (no personalizable)",
            },
          ]}
          noIncluye={[
            "Base de datos",
            "Mantenimiento general",
            "Tema claro/oscuro",
          ]}
        />
        <PriceCard
          onDefaultMessageChange={onDefaultMessageChange}
          color={"yellow"}
          type="ORO"
        //   price="100"
        //   mensualidad="60"
          features={[
            {
              title: "Página web con 5 secciones",
              isIncluded: true,
              description:
                "Diseñamos y desarrollamos una página web con hasta 5 secciones, brindándote más espacio para contenido.",
            },
            {
              title: "Colores y diseño a elegir",
              isIncluded: true,
              description:
                "Personalizamos los colores y el diseño de la página según tus preferencias y estilo de marca.",
            },
            {
              title: "Formulario de contacto",
              isIncluded: true,
              description:
                "Incluimos un formulario de contacto para que tus visitantes puedan enviarte mensajes fácilmente.",
            },
            {
              title: "Tema claro/oscuro",
              isIncluded: true,
              description:
                "Ofrecemos la opción de elegir entre un tema claro y oscuro, para adaptarse a tus preferencias de visualización.",
            },
            {
              title: "Hosting/Dominio",
              isIncluded: true,
              description:
                "Se incluye un hosting y un dominio gratuito (no personalizable)",
            },
            {
              title: "Mantenimiento general",
              isIncluded: true,
              description:
                "Proporcionamos mantenimiento regular para garantizar un rendimiento óptimo de tu sitio web.",
            },
          ]}
          isPopular={true}
          noIncluye={["Base de datos"]}
        />
        <PriceCard
          onDefaultMessageChange={onDefaultMessageChange}
          color={"emerald"}
          type="ESMERALDA"
        //   price="200"
        //   mensualidad="120"
          features={[
            {
              title: "Página web con máx. 10 secciones",
              isIncluded: true,
              description:
                "Diseñamos y desarrollamos una página web con hasta 10 secciones, brindándote flexibilidad y espacio para tu contenido.",
            },
            {
              title: "Colores y diseño a elegir",
              isIncluded: true,
              description:
                "Personalizamos los colores y el diseño de la página según tus preferencias y estilo de marca.",
            },
            {
              title: "Formulario de contacto",
              isIncluded: true,
              description:
                "Incluimos un formulario de contacto para que tus visitantes puedan enviarte mensajes fácilmente.",
            },
            {
              title: "Tema claro/oscuro",
              isIncluded: true,
              description:
                "Ofrecemos la opción de elegir entre un tema claro y oscuro, para adaptarse a tus preferencias de visualización.",
            },
            {
              title: "Hosting/Dominio",
              isIncluded: true,
              description:
                "Se incluye un hosting y un dominio gratuito (no personalizable)",
            },
            {
              title: "Mantenimiento general",
              isIncluded: true,
              description:
                "Proporcionamos mantenimiento regular para garantizar un rendimiento óptimo de tu sitio web.",
            },
            {
              title: "Base de datos",
              isIncluded: true,
              description:
                "Incorporamos una base de datos para almacenar y gestionar datos, brindándote más funcionalidades.",
            },
            {
              title: "Incluye carrito de compra por WhatsApp",
              isIncluded: true,
              description:
                "Facilitamos las ventas a través de WhatsApp con un carrito de compra integrado para tus productos o servicios.",
            },
            {
              title: "Catálogo Administrable",
              isIncluded: true,
              description:
                "Proporcionamos un catálogo administrable para facilitar la gestión de tus productos o servicios.",
            },
          ]}
          noIncluye={["Pagos en línea"]}
        />
        <PriceCard
          onDefaultMessageChange={onDefaultMessageChange}
          color={"purple"}
          type="DIAMANTE"
        //   price="800"
        //   mensualidad="500"
          features={[
            {
              title: "Personalizada al gusto y necesidades del cliente",
              isIncluded: true,
              description:
                "Diseñamos y desarrollamos completamente a medida, adaptándonos a tus gustos y necesidades específicas.",
            },
            {
              title: "Dirigido a empresas que quieran digitalizar procesos",
              isIncluded: true,
              description:
                "Orientado a empresas que buscan digitalizar y optimizar sus procesos comerciales mediante soluciones web.",
            },
            {
              title: "Reuniones continuas para evaluar requerimientos",
              isIncluded: true,
              description:
                "Mantenemos reuniones continuas para evaluar y ajustar los requisitos del proyecto, asegurándonos de satisfacer tus expectativas.",
            },
            {
              title: "Progreso/mantenimientos constantes y documentados",
              isIncluded: true,
              description:
                "Realizamos un seguimiento constante del progreso del proyecto y documentamos detalladamente todos los mantenimientos realizados.",
            },
            {
              title: "Hosting/Dominio",
              isIncluded: true,
              description:
                "Se incluye un hosting y un dominio gratuito (no personalizable)",
            },
            {
              title: "Se inicia con el proyecto desde cero",
              isIncluded: true,
              description:
                "Iniciamos el proyecto desde la etapa inicial de planificación y diseño, asegurándonos de construir una solución a medida desde cero.",
            },
          ]}
          noIncluye={[]}
        />
      </div>
    </div>
  </section>
);

export default Prices;
