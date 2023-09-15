"use client"

import { myFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ButtonMap } from "../button/button-map";
import { CanvasTest } from "../canvas";
import { useState } from "react";

export const MapBuset = () => {
  const [hover,setHover] = useState(false)
    return (
      <div className="lg:flex-row   relative items-center flex-col flex justify-between">
        <div className="absolute  w-full h-full top-0 left-0 clip polygon b-3-r d-3-r a-3-r c-3-r e-3-r bg-slate-800/50 group-hover:bg-slate-700 transition-all"></div>
        <div className="w-[900px] ">
          <img
            className="brightness-50 drop-shadow-assassin transition-all  group-hover:-translate-y-[100px]"
            src="image/map.png"
            alt=""
          />
        </div>
        <div className="w-[500px] flex flex-col lg:pt-0 pt-[100px] items-center z-20 lg:pr-[200px] h-[500px] ">
          <div>
            <span
              className={cn("text-[40px] leading-[40px]", myFont.className)}
            >
              MULAILAH
            </span>
          </div>
          <div>
            <span
              className={cn("text-[60px] leading-[50px]", myFont.className)}
            >
              PERJALANANMU
            </span>
            <div className="w-full text-center">
              <span>
                Ayo bergabung ke Mobile Legends di map Land of Dawn dan jadilah
                pahlawan yang tak terkalahkan!
              </span>
            </div>
            <div className="flex gap-[60px] lg:pt-6 pt-11 justify-center relative uppercase">
              <div className="group relative">
                <ButtonMap color="zinc-400" title="Lihat lebih" />
              </div>
              <div className="group relative">
                <ButtonMap color="blue-400" title="Pelajari" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}