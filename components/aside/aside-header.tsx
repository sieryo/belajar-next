"use client"

import { ChevronLeftIcon, Code } from "lucide-react";

export const AsideHeader = (close: any) => {

    const handle = close.close
    return (
      <div className="w-full h-[70px] bg-slate-800 text-white text-xl flex items-center justify-center shadow">
        <p className="text-center">
          BELAJAR - NEXT <span className="text-rose-200">JAVASCRIPT</span>
        </p>

        <div className="absolute right-0 top-[50%]">
          <ChevronLeftIcon onClick={handle} />
        </div>
      </div>
    );
}