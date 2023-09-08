"use client"

import { cn } from "@/lib/utils"
import { AsideHeader } from "./aside-header"
import {useState} from 'react'


export const AsideUtama = () => {

    const [isOpen, setIsOpen] = useState(true)

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
      <div
        className={cn(
          "h-full w-[0px] opacity-0 bg-gray-700 transition-all relative",
          isOpen && "w-[220px] flex opacity-100"
        )}
      >
        <AsideHeader close={handleClose} />
      </div>
    );
}