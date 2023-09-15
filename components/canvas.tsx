"use client";

import { useEffect, useRef, useState } from "react";

export const CanvasTest = () => {
  const canvasRef = useRef(null);
  const [current,setCurrent] = useState('')

  const drawF1 = (c,canvas) => {
    c.lineCap = 'round'
    c.clearRect(0,0, canvas.width, canvas.height)
    c.strokeStyle = '#fff'
    c.beginPath();
    c.moveTo(0,0)
    c.lineTo(170,0)
    c.lineTo(200,30)
    c.lineTo(200,70)
    c.lineTo(30,70)
    c.lineTo(0,40)
    c.lineTo(0,0)
    c.closePath()
    c.stroke()
  };
  const drawF2 = (c,canvas) => {
    c.lineCap = "round";
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.strokeStyle = "#fff";
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(175, 0);
    c.lineTo(200, 25);
    c.lineTo(200, 70);
    c.lineTo(25, 70);
    c.lineTo(0, 45);
    c.lineTo(0, 0);
    c.closePath();
    c.stroke();
  }
  const drawF3 = (c,canvas) => {
    c.lineCap = "round";
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.strokeStyle = "#fff";
    c.beginPath();
    c.moveTo(0, 0);
    c.lineTo(190, 0);
    c.lineTo(200, 10);
    c.lineTo(200, 70);
    c.lineTo(10, 70);
    c.lineTo(0, 60);
    c.lineTo(0, 0);
    c.closePath();
    c.stroke();
  }
  const drawF4 = (c,canvas) => {
    c.lineCap = 'round'
    c.clearRect(0,0, canvas.width, canvas.height)
    c.strokeStyle = '#fff'
    c.beginPath();
    c.moveTo(0,0)
    c.lineTo(200,0)
    c.lineTo(200,0)
    c.lineTo(200,70)
    c.lineTo(0,70)
    c.lineTo(0,70)
    c.lineTo(0,0)
    c.closePath()
    c.stroke()
  };
  useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      drawF1(context,canvas)
  },[])
    const ganti = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      setTimeout(() => {
          drawF2(context,canvas)
          setTimeout(() => {
            drawF3(context,canvas)
            setTimeout(() => {
              drawF4(context,canvas)
            },40)
          },10)
      },10)
    }
    const balik = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      setTimeout(() => {
        drawF3(context, canvas);
        setTimeout(() => {
          drawF2(context, canvas);
          setTimeout(() => {
            drawF1(context, canvas);
          }, 40);
        },10);
      }, 10);
    };
  return (
      <canvas
        className=" ml-5 pointer-events-auto brightness-75 group-hover:brightness-100  group-hover:delay-0 transition-all duration-1500 animate-hello buset opacity-0"
        width={200}
        height={70}
        onMouseEnter={() => ganti()}
        onMouseLeave={() => balik()}
        ref={canvasRef}
      ></canvas>
  );
};
