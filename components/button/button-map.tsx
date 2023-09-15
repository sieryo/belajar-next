import { cn } from "@/lib/utils";
import { CanvasTest } from "../canvas";


interface ButtonMapProps {
    title : string;
    color: string;
}

export const ButtonMap = ({
    title,
    color
} : ButtonMapProps) => {
    return (
      <div
        className={cn(
          ` bg-${color}`,
          "w-[180px] h-[50px] bg-blue-600 group-hover:bg-blue-700 text-zinc-400 pointer-events-auto group-hover:text-white transition-all duration-200 "
        )}
      >
        <a
          className=" z-10 relative w-full h-full flex items-center justify-center"
          href="/"
        >
          <div className="absolute z-30 pointer-events-auto top-[-10px] left-[-30px] w-[200px]">
            <CanvasTest />
          </div>
          {title}
        </a>
      </div>
    );
}