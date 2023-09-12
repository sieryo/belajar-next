import { myFont } from "@/lib/fonts";
import { cn } from "@/lib/utils"

export const CharacterBuset = (
    {imageUrl,
      heroName,
      skinName
} : {imageUrl : string, heroName : string, skinName : string}) => {
    return (
      <div className="w-full  h-[550px] flex justify-end items-center flex-col drop-shadow-assassin ">
        <img
          className={cn(
            " object-contain scale-[100%] transition-all",
            imageUrl && `drop-shadow-${imageUrl}`
          )}
          src={`image/${imageUrl}.png`}
          alt=""
        />
        <div className="w-[200px] pt-[50px]  text-white z-30   p-2 flex flex-col items-center h-20">
          <span className={cn(myFont.className, "text-[45px] leading-[45px]")}>
            {heroName}
          </span>
          <span className="block">{skinName}</span>
        </div>
      </div>
    );
}