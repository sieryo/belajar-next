import Image from "next/image";

export const NavbarBuset = () => {
    return (
      <div className="flex h-full w-full text-white items-center justify-around relative">
        <div className="w-[100px] h-full flex justify-center items-center">
          <Image 
          width={150}
          height={150}
          src="/image/logo_ml.png"
          alt="logo-mobileLegends"
          />
        </div>
        <div className="w-[300px]  h-full ">
            <ul className="flex justify-center items-center h-full gap-7">
                <li>NAV A</li>
                <li>NAV B</li>
                <li>NAV C</li>
            </ul>
        </div>
        <div>
            sebuah
        </div>
      </div>
    );
}