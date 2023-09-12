import { myFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export const TitleBuset = () => {
    return (
      <>
        <div className="text-center relative w-full h-full flex items-center justify-center">
          <div className="relative w-full p-5 flex items-center justify-center flex-col">
            <span
              className={cn(
                myFont.className,
                "text-zinc-400 text-[55px] leading-[35px]"
              )}
            >
              JOIN THE
            </span>
            <span
              className={cn(
                myFont.className,
                "text-[130px] block leading-[110px] text-zinc-200"
              )}
            >
              LAND OF DAWN
            </span>
            <div className="mt-[70px] max-w-[1000px]">
              <span className="text-xl ">
                Setiap hari, jutaan pemain di seluruh dunia memasuki pertempuran
                sebagai salah satu dari ratusan Hero dalam Mobile Legends,
                pertandingan tim 5v5. Mobile Legends adalah game aksi
                multiplayer RTS yang paling mendalam yang pernah ada, dan selalu
                ada strategi atau taktik baru yang dapat ditemukan. Ini
                sepenuhnya gratis untuk dimainkan dan akan selalu begitu -
                mulailah melindungi markas Anda sekarang.
              </span>
            </div>
          </div>
        </div>
      </>
    );
}