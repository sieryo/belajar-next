"use client"

import { MapBuset } from "@/components/buset/map-buset";
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
          <div className="bg-gradient-to-b from-black w-full h-[1500px] via-slate-800  p-1 to-black">
            <ContentBuset />
          </div>
          <div className="bg-gradient-to-b from-black w-full pt-[200px] via-slate-950  h-[1200px] p-1 to-slate-800">
            <div className=" max-w-[1350px] mx-auto">
              <MapBuset />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
}
 
export default LivePage
;