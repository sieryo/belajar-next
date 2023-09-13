import { NavbarBuset } from "@/components/navbar-buset";

export default function PageLayout({
    children
} : {children : string}
){
    return (
      <>
        <nav className="z-[100] fixed w-full h-[80px] backdrop-blur-sm border-b-[1px] bg-slate-700/20 border-slate-400/50">
            <NavbarBuset />
        </nav>
        <div className="w-full h-full bg-zinc-800">
            {children}
        </div>
      </>
    );
}