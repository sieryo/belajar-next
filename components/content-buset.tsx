"use client";

import { myFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { RoleBuset } from "./buset/role-buset";
import { useState } from "react";
import { CharacterBuset } from "./buset/character-buset";

export const ContentBuset = () => {
  const [isActive, setIsActive] = useState("ASSASSIN");
  const [loading, setLoading] = useState(false);
  const [heroName, setHeroName] = useState("LING")
  const [skinName, setSkinName] = useState("Cyan Finch")

  const handleActive = (roleName: string, heroName : string, skinName : string) => {
    if(loading) {
      return ;
    }

    if (isActive !== roleName) {
      setLoading(true);
      setTimeout(() => {
        setIsActive(roleName);
        setHeroName(heroName);
        setSkinName(skinName);
      },300)
      setTimeout(() => {
        setLoading((loading) => !loading);
      }, 500);
    }
  };

  return (
    <>
      <div className="w-full h-[300px] mt-[200px]   text-white ">
        <div className="w-full flex items-center flex-col relative">
          <span
            className={cn(myFont.className, "  text-[30px] leading-[30px]")}
          >
            CHOOSE YOUR
          </span>
          <span
            className={cn(
              myFont.className,
              " text-[100px] block leading-[75px]"
            )}
          >
            HERO
          </span>
          <span className="mt-7 w-[40%] text-center md:w-[400px]">
            Carilah Hero yang pas untuk gaya bermainmu. Semua hero memiliki
            keunikannya sendiri!
          </span>
        </div>
      </div>
      <div className="w-full h-[1000px] text-white   flex flex-col justify-center items-center lg:flex-row">
        <div className="w-[100%] lg:w-[1100px]">
          <div className="lg:w-[800px] w-[100%] h-[100px] pb-[150px]    relative  flex flex-col justify-center">
            <div className={cn("flex  justify-around h-[140px]", myFont.className)}>
              <div
                onClick={() => handleActive("ASSASSIN", "LING", "Cyan Finch")}
              >
                <RoleBuset
                  active={isActive}
                  roleName="ASSASSIN"
                  imageUrl="image/logo-assassin.png"
                />
              </div>
              <div
                onClick={() =>
                  handleActive("FIGHTER", "Martis", "World Dominator")
                }
              >
                <RoleBuset
                  active={isActive}
                  roleName="FIGHTER"
                  imageUrl="image/logo-fighter.png"
                />
              </div>
              <div
                onClick={() =>
                  handleActive("MARKSMAN", "Brody", "All World Rounder")
                }
              >
                <RoleBuset
                  active={isActive}
                  roleName="MARKSMAN"
                  imageUrl="image/logo-mm.png"
                />
              </div>
              <div onClick={() => handleActive("TANK", "KANJ", "YASUO")}>
                <RoleBuset
                  active={isActive}
                  roleName="TANK"
                  imageUrl="image/logo-tank.png"
                />
              </div>
              <div onClick={() => handleActive("MAGE", "SIERYO", "SAIKYOU")}>
                <RoleBuset
                  active={isActive}
                  roleName="MAGE"
                  imageUrl="image/logo-mage.png"
                />
              </div>

              <div
                onClick={() =>
                  handleActive("SUPPORT", "HERO", "DESKRIPSI NAMA")
                }
              >
                <RoleBuset
                  active={isActive}
                  roleName="SUPPORT"
                  imageUrl="image/logo-support.png"
                />
              </div>
            </div>
            <Separator className="bg-gray-500 top-[40px]  absolute z-[1]" />
            <div></div>
          </div>
        </div>
        <div className="w-[400px] h-[400px] md:mr-[50px] lg:w-[750px] lg:h-[750px]  text-black">
          <div className="w-full h-full border rounded-full flex relative  items-center justify-center">
            <div
              className={cn(
                "absolute w-[400px] h-[400px] rounded-full bg-slate-800  transition-all",
                loading && "bg-slate-400"
              )}
            ></div>
            <div
              className={cn(
                "opacity-100 animate-fade-in transition-all flex flex-col items-center",
                loading && " brightness-0 -translate-y-2 "
              )}
            >
              <CharacterBuset
                skinName={skinName}
                heroName={heroName}
                imageUrl={isActive}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
