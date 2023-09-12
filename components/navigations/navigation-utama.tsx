import { ScrollArea } from "../ui/scroll-area"
import { NavigationItem } from "./navigation-item"

export const NavigationUtama = () => {
    return (
      <ScrollArea className="h-full w-[100px] bg-zinc-500 ">
        <div className="flex flex-col items-center">
          <NavigationItem />
        </div>
      </ScrollArea>
    );
}