import React from "react";

const Footer = () => {
  return (
    <footer
      className=" text-white fixed bottom-0 flex pt-2 justify-center w-full z-50  backdrop-blur-xl shadow-3xl bg-gradient-to-r-porfolio"
      style={{ backgroundColor: "rgba(37, 99, 235, 0.2)" }}
    >
      <div className="flex items-center text-center justify-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Developed by Juanma Garrido
        </span>
      </div>
      <div className="block lg:hidden"></div>
    </footer>
  );
};

export default Footer;
