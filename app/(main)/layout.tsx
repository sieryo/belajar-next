import { AsideUtama } from "@/components/aside/aside-utama";
import { NavigationUtama } from "@/components/navigations/navigation-utama";

export default function MainLayout({
    children,
}: {children: React.ReactNode}){
    return (
        <div className="h-full flex">
            <nav className="h-full">
            <NavigationUtama />
            </nav>
            <div className="h-full">
                <AsideUtama />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}