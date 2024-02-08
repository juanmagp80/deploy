import { useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Header from "./Components/Header/index.jsx";
import HorizontalCard from "./Components/Card/index.jsx";
import HorizontalCard2 from "./Components/Card2/index.jsx";
import HorizontalCard3 from "./Components/Card3/index.jsx";
import HorizontalCard4 from "./Components/Card4/index.jsx";
import Footer from "./Components/Footer/index.jsx";
import CardFlip from "./Components/CardFlip/index.jsx";
import Tecnologias from "./Components/Tecnologías/index.jsx";

import { VisibilityContext } from "./context/index.jsx";
import OpenCards from "./Components/CardFlip/index.jsx";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);
  const sobremiRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const proyectosRef = useRef(null);
  const experienciaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleSobreMiClick = () => {
    sobremiRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleProyectosClick = () => {
    proyectosRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const handleExperienciaClick = () => {
    experienciaRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <VisibilityContext.Provider value={{ isVisible, setIsVisible }}>
        <CSSTransition
          in={loading}
          timeout={1000}
          classNames="fade"
          unmountOnExit
        >
          <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
            <img className="w-72 h-72" src={"./waving.png"} alt="logo" />
            <p className="text-white text-3xl font-poppins">
              ¡Hola! Soy Juanma
            </p>
          </div>
        </CSSTransition>
        {!loading && (
          <div className="App bg-indigo-500 pt-2 min-h-screen">
            <Header
              handleContactClick={handleContactClick}
              handleSobreMiClick={handleSobreMiClick}
              handleProyectosClick={handleProyectosClick}
              handleExperienciaClick={handleExperienciaClick}
            />
            <HorizontalCard />
            <HorizontalCard2 sobremiRef={sobremiRef} />
            <OpenCards proyectosRef={proyectosRef} />

            <HorizontalCard3 experienciaRef={experienciaRef} />
            <HorizontalCard4 formRef={formRef} />
            <Footer />
          </div>
        )}
      </VisibilityContext.Provider>
    </>
  );
}

export default App;
