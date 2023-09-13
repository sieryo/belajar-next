"use client";

import { useEffect, useRef, useState } from "react";

export const CanvasClip = () => {
  const canvasRef = useRef(null);
  const [clip, setClip] = useState(true)
  const [count, setCount] = useState(1)
  const test = () => {
    setClip((prev) => !prev)
    
  }

  const draw = (c, clip) => {
    c.clearRect(0, 0, 250,250);
    c.strokeStyle = "#333";

    c.moveTo(0, 200);
    setInterval(() => {
      setCount((prev) => prev + 1)
    },500)
    setInterval(() => {
    c.lineTo(count, 250);
    },500)
    
     
     c.moveTo(50, 250);
 
     
   
    c.stroke();
    }
    
  useEffect(() => {
   const canvas = canvasRef.current;
   const context = canvas?.getContext("2d");


   // Gambar ulang saat isHovered berubah
   draw(context, clip);
  }, [clip]);

  return (
    <div className="p-5">
      <canvas
        className=" transition-all duration-1000"
        width={250}
        height={250}
        onMouseEnter={() => test()}
        onMouseLeave={() => test()}
        ref={canvasRef}
      ></canvas>
    </div>
  );
};
