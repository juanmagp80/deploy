import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Tecnologias() {
  return (
    <>
      <div className="flex flex-wrap justify-center pb-12">
        <div className="tech-icons text-white m-4">
          <DiJavascript1 />
        </div>

        <div className="tech-icons text-white m-4">
          <DiNodejs />
        </div>
        <div className="tech-icons text-white m-4">
          <DiReact />
        </div>

        <div className="tech-icons text-white m-4">
          <DiMongodb />
        </div>
        <div className="tech-icons text-white m-4">
          <SiNextdotjs />
        </div>
        <div className="tech-icons text-white m-4">
          <DiGit />
        </div>

        <div className="tech-icons text-white m-4">
          <DiBootstrap />
        </div>
        <div className="tech-icons text-white m-4">
          <SiTailwindcss />
        </div>

        <div className="tech-icons text-white m-4">
          <DiHtml5 />
        </div>
        <div className="tech-icons text-white m-4">
          <DiCss3 />
        </div>
        <div className="tech-icons text-white m-4">
          <FaGithub />
        </div>
      </div>
    </>
  );
}

export default Tecnologias;
