import { cn } from "@/lib/utils";

type color = "blue" | "zinc" | "red" | 'emerald'

interface ButtonMapProps {
    title : string;
    color: color
}

export const ButtonMap = ({
    title,
    color
} : ButtonMapProps) => {
    console.log(color)
    return (
      <div
        className={cn(
          `bg-transparent bg-${color}-500  `,
          "w-[180px] h-[50px] text-zinc-200 group-hover:text-white transition-all duration-500 "
        )}
      >
        <a
          className=" z-10 relative w-full h-full flex items-center justify-center"
          href="/"
        >
          {title}
        </a>
      </div>
    );
}