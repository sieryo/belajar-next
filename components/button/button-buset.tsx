

export const ButtonBuset = () => {
    return (
      <div className="w-[180px] h-[40px] group bg-transparent border border-yellow-300 transition-all  relative cursor-pointer">
        <div className="h-full -z-10 w-[0px] transition-all bg-yellow-600 absolute group-hover:w-full duration-500 delay-200"></div>
        <div className="flex items-center justify-center h-full">
          <span className=" tracking-wide group-hover:text-white transition-all text-yellow-300">LIHAT LEBIH</span>
        </div>
      </div>
    );
}