import React, { useRef, useEffect, useState } from "react";
import MovingIcon from "../MovingIcon";

const Container = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <MovingIcon
        icon="react"
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
      />
      <MovingIcon
        icon="angular"
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
      />
      <MovingIcon
        icon="vue"
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
      />
    </div>
  );
};

export default Container;
