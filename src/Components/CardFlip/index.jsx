import React, { useState } from "react";
import { motion } from "framer-motion";
import nflix from "../../assets/nflix.png";
import city3 from "../../assets/city3.png";
import planet1 from "../../assets/planet1.png";
import planet2 from "../../assets/planet2.png";
import HomeMusic from "../../assets/HomeMusic.jpg";
import weather from "../../assets/963shots_so.png";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

const OpenCards = ({ proyectosRef }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { ref, inView, entry } = useInView({
    triggerOnce: false,
  });

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "450px",
    },
    collapsed: {
      width: "200px",
    },
  };
  const cardImagePositions = [
    "center", // Posición para la primera imagen
    "center", // Posición para la segunda imagen
    "bottom", // Posición para la tercera imagen
    "left", // Posición para la cuarta imagen
    "right", // P
  ];
  const cardLinks = [
    "https://port-folio-jmg.vercel.app/",
    "https://homemusic.netlify.app/",
    "https://thunderous-puffpuff-3c61b5.netlify.app/",
    "https://port-folio-jmg.vercel.app/",
    "https://port-folio-jmg.vercel.app/",
  ];
  const cardImages = [nflix, HomeMusic, weather, planet1, planet2];

  const cardDescriptions = [
    "App de información sobre cine y series, realizada con React Native",
    "Réplica visual de spotify. Realizada con Astro, añadiendo componentes de Svelte y React. Tailwind como framework de CSS. Archivos de musica cargados localmente. ",
    "Web de información sobre el clima, realizada con React, estilos con Tailwind. Usando la API de WeatherAPI",
    "Proximamente....",
    "Proximamente....",
  ];
  const cardTitles = [
    "NFlix",
    "HomeMusic",
    "OpenWeather",
    "Proyecto4",
    "Proyecto5",
  ];
  return (
    <div
      className="flex justify-center rounded-xl items-center mb-40 bg-indigo-500"
      ref={proyectosRef}
    >
      <section className="py-16 pb-[200px] md:h-[50rem] md:w-[85rem] shadow-3xl rounded-xl bg-blue-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold font-raleway text-white">
            Mis Proyectos
          </h1>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
          {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? "expanded" : ""
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? "expanded" : "collapsed"}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundPosition: cardImagePositions[index],
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="card-content h-full flex flex-col justify-end">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-white text-center">
                    {cardTitles[index]}
                  </h2>
                  {index === expandedIndex && (
                    <div className="flex font-poppins flex-col items-center">
                      <p className="mt-2 font-poppins text-white text-center">
                        {cardDescriptions[index]}{" "}
                      </p>
                      <a
                        href={cardLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="mt-2 mb-2 shadow-3xl font-poppins  bg-blue-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                          Visitar sitio
                        </button>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpenCards;
