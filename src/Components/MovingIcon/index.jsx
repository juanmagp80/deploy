import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaHtml5, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

// Puedes elegir los iconos que desees

const IconMotionComponent = () => {
  const icons = [
    <FaReact />,
    <SiTailwindcss />,
    <FaGithub />,
    <FaHtml5 />,
    <IoLogoJavascript />,
    <FaNode />,
  ];

  const iconVariants = {
    initial: { opacity: 4, y: 100 },
    animate: (index) => ({
      opacity: 8,
      y: 0,
      x: Math.random() * 150 - 75,
      scale: Math.random() * 0.5 + 2.5,
      rotate: Math.random() * 260,
      transition: { duration: 10, repeat: Infinity, yoyo: Infinity },
    }),
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex mb-10 md:mb-60 flex-wrap">
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className="m-2 md:m-5 text-3xl"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            custom={index}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconMotionComponent;
