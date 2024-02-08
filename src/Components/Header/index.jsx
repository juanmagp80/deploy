import React, { useContext } from "react";
import Logo from "../../../public/default.png";

import { VisibilityContext } from "../../context";
import CardBio from "../CardBio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";

function index({
  handleContactClick,
  handleSobreMiClick,
  handleProyectosClick,
  handleExperienciaClick,
}) {
  const { setIsVisible, isVisible } = useContext(VisibilityContext);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header
      className=" text-white flex pt-24 justify-between items-center text-center fixed top-0 w-full z-50  backdrop-blur-xl shadow-3xl bg-gradient-to-r-porfolio"
      style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
    >
      <div className="p-3 pb-0 md:px-16 overflow-hidden hover:cursor-pointer">
        <nav className="flex px-2 py-4 justify-between z-30 fixed top-0 left-1 mb-5 w-full ">
          <a
            onClick={handleClick}
            className=" text-white text-base text-center flex flex-col items-center text font-raleway md:text-3xl lg:text-4l"
          >
            {`</Juanma`} <b className="md: hidden ml-6" />{" "}
            <span className=" md:inline ml-6">{`Garrido/>`}</span>
            <FontAwesomeIcon
              icon={faMousePointer}
              className="animate-bounce mt-4 shadow-2xl hidden lg:block"
            />
            <CardBio
              className={`${
                isVisible ? "slide-right" : "slide-left"
              } md:hidden lg:block`}
            />
            <CardBio className="slide-right md:hidden lg:block" />
          </a>

          <ul className="flex flex-col items-center md:items-center md:justify-between md:flex-row md:space-x-4 font-poppins text-white font-bold">
            <li>
              <a
                href="#section1"
                className="text-white font-raleway text-base md:text-3xl lg:text-4l"
                onClick={handleSobreMiClick}
              >
                <span className="nav-item">
                  Sobre mi
                  <span className="underline"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#section2"
                className="text-white font-raleway text-base md:text-3xl lg:text-4l"
                onClick={handleProyectosClick}
              >
                <span className="nav-item">
                  Proyectos
                  <span className="underline"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#section3"
                className="text-white font-raleway text-base md:text-3xl lg:text-4l"
                onClick={handleExperienciaClick}
              >
                <span className="nav-item">
                  Experiencia
                  <span className="underline"></span>
                </span>
              </a>
            </li>
          </ul>
          <a
            href="#_"
            className="relative inline-block text-sm md:text-lg group"
            onClick={handleContactClick}
          >
            <button
              onClick={handleContactClick}
              type="button"
              className="text-xs md:text-sm border-2 border-indigo-50 border-solid bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-raleway rounded-lg px-3 py-1.5 md:px-5 md:py-2.5 text-center me-2 mb-2"
            >
              Contáctame
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default index;
