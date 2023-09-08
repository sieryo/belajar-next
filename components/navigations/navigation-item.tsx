"use client"


import {useState} from 'react'
import { useModal } from '@/hooks/use-modal-store';
import { Database } from 'lucide-react';

export const NavigationItem = () => {
  const {onOpen} = useModal()
  const data = "ANJAI MABAR"

  return (
    <div>
      <div
        onClick={() => onOpen("Modal1", { data })}
        className="w-[60px] h-[60px] rounded-full bg-slate-100 mt-3 cursor-pointer transition-all hover:bg-slate-600"
      ></div>
      <div
        onClick={() => onOpen("Modal2", { data })}
        className="w-[60px] h-[60px] rounded-full bg-slate-200 mt-3 cursor-pointer transition-all hover:bg-slate-600 flex flex-col justify-center items-center text-cyan-800 hover:text-yellow-50"
      ><Database /></div>
    </div>
  );
};
