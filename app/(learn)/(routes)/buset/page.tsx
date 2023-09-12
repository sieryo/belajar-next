"use client"

import { ContentBuset } from "@/components/content-buset";
import { TestComponent } from "@/components/test";
import { TitleBuset } from "@/components/title/title-buset";
import Image from "next/image";

const LivePage = () => {
    return (
      <div className="relative w-full h-full">
        <div className="h-screen w-screen">
          <TestComponent />
        </div>
        <div className="w-full relative h-[800px] flex justify-center items-center">
          <Image className=" brightness-[0.25] w-full " fill objectFit="cover" src="/image/group.png" alt="test"  />
          <div className="z-30 mt-[500px] h-[300px]  w-full text-white">
            <TitleBuset />
          <div className="bg-gradient-to-b from-black w-full h-[1500px]  p-1 to-slate-800">
            <ContentBuset />
          </div>
          </div>
        </div>
      </div>
    );
}
 
export default LivePage
;