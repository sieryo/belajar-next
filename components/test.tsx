"use client"

import { cn } from "@/lib/utils";
import { titleFont, titleFont2, myFont } from "@/lib/fonts";

import { ButtonBuset } from "./button/button-buset";

export const TestComponent = () => {
    return (
      <div className=" text-white relative">
        <div className="absolute w-[700px] h-[400px]  z-20 bottom-[10%] flex flex-col justify-center">
          <div className={cn("text-[30px] ms-10")}>WELCOME TO</div>
          <div
            className={cn(
              "  text-[45px] ms-10 drop-shadow-lg text-orange-300",
              myFont.className
            )}
          >
            MOBILE LEGENDS
          </div>
          <div className="ms-10">
            <ButtonBuset />
          </div>
        </div>
        <video
          className="w-full h-full brightness-[0.75]"
          autoPlay={true}
          loop={true}
          preload="auto"
          src="video/video.mp4"
        ></video>
      </div>
    );
}