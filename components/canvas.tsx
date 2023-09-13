"use client";

import { useEffect, useRef } from "react";

export const CanvasTest = () => {
  const canvasRef = useRef(null);

  const draw = (c) => {
    c.strokeStyle = "#fff";
    c.moveTo(40, 50);
    c.lineTo(200, 50);
    c.moveTo(200, 50);
    c.lineTo(220, 70);
    c.moveTo(220, 70);
    c.lineTo(220, 100);
    c.moveTo(220, 100);
    c.lineTo(60, 100);
    c.moveTo(60, 100);
    c.lineTo(40, 80);
    c.moveTo(40, 80);
    c.lineTo(40, 50);

    c.stroke();
  };
  useEffect(() => {
    setTimeout(() => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      draw(context);
    });
    
  }, []);

  return (
    <canvas
      className=" brightness-75 group-hover:brightness-100 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:delay-0 transition-all duration-500 animate-fade-in delay-100 opacity-0"
      width={250}
      height={100}
      ref={canvasRef}
    ></canvas>
  );
};
