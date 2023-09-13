"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";




export const RoleBuset = ({
  roleName,
  imageUrl,
  active
}: {
  roleName: string;
  imageUrl: string;
  active: string
}) => {
    
  return (
    <div className="w-[100px]  h-[100px] group flex flex-col items-center  mb-[200px]">
      <div className="flex flex-col  group items-center cursor-pointer">
        <img
          className={cn(
            "w-[60px] object-cover grayscale h-[60px] group-hover:-translate-y-4 transition-all group-hover:grayscale-0",
            active === roleName && "grayscale-0 -translate-y-4 scale-105"
          )}
          src={imageUrl}
          alt="Logo"
        />
        <span
          className={cn(
            "mt-[14px] text-gray-500 group-hover:text-white transition-all",
            active === roleName && "text-white -translate-y-2"
          )}
        >
          {roleName}
        </span>
      </div>
      <div className="z-10">
        <span className={cn("inline-block w-[10px] h-[10px] group-hover:bg-white transition-all bg-gray-500  rounded-full ",
        active === roleName && "bg-white"
        )}></span>
      </div>
    </div>
  );
};
