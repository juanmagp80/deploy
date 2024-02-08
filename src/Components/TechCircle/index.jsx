import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { FaReact, FaCss3, FaJs, FaGit } from "react-icons/fa";

const TechCircle = () => {
  const [offsetReact, setOffsetReact] = useState({ x: 0, y: 0, dx: 1, dy: 1 });
  const [offsetCss, setOffsetCss] = useState({ x: 50, y: 0, dx: -1, dy: 1 });
  const [offsetJs, setOffsetJs] = useState({ x: 0, y: 50, dx: 1, dy: -1 });
  const [offsetGit, setOffsetGit] = useState({ x: 50, y: 50, dx: -1, dy: -1 });

  const propsReact = useSpring({
    left: offsetReact.x,
    top: offsetReact.y,
    opacity: 1,
  });
  const propsCss = useSpring({
    left: offsetCss.x,
    top: offsetCss.y,
    opacity: 1,
  });
  const propsJs = useSpring({ left: offsetJs.x, top: offsetJs.y, opacity: 1 });
  const propsGit = useSpring({
    left: offsetGit.x,
    top: offsetGit.y,
    opacity: 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOffsetReact((prev) => ({
        x: prev.x + prev.dx,
        y: prev.y + prev.dy,
        dx: prev.x + prev.dx < 0 || prev.x + prev.dx > 150 ? -prev.dx : prev.dx,
        dy: prev.y + prev.dy < 0 || prev.y + prev.dy > 150 ? -prev.dy : prev.dy,
      }));
      setOffsetCss((prev) => ({
        x: prev.x + prev.dx,
        y: prev.y + prev.dy,
        dx: prev.x + prev.dx < 0 || prev.x + prev.dx > 150 ? -prev.dx : prev.dx,
        dy: prev.y + prev.dy < 0 || prev.y + prev.dy > 150 ? -prev.dy : prev.dy,
      }));
      setOffsetJs((prev) => ({
        x: prev.x + prev.dx,
        y: prev.y + prev.dy,
        dx: prev.x + prev.dx < 0 || prev.x + prev.dx > 150 ? -prev.dx : prev.dx,
        dy: prev.y + prev.dy < 0 || prev.y + prev.dy > 150 ? -prev.dy : prev.dy,
      }));
      setOffsetGit((prev) => ({
        x: prev.x + prev.dx,
        y: prev.y + prev.dy,
        dx: prev.x + prev.dx < 0 || prev.x + prev.dx > 150 ? -prev.dx : prev.dx,
        dy: prev.y + prev.dy < 0 || prev.y + prev.dy > 150 ? -prev.dy : prev.dy,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-150 h-150">
        <animated.div style={propsReact} className="absolute">
          <FaReact className="text-black" style={{ fontSize: "3em" }} />
        </animated.div>
        <animated.div style={propsCss} className="absolute">
          <FaCss3 className="text-black" style={{ fontSize: "3em" }} />
        </animated.div>
        <animated.div style={propsJs} className="absolute">
          <FaJs className="text-black" style={{ fontSize: "3em" }} />
        </animated.div>
        <animated.div style={propsGit} className="absolute">
          <FaGit className="text-black" style={{ fontSize: "3em" }} />
        </animated.div>
      </div>
    </div>
  );
};

export default TechCircle;
