"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import navs from "@/data/navs";

const Header = () => {
  const pathname = usePathname();

  const setHoverStyle = (path: string) =>
    path === pathname && "border-b-2 border-accent text-accent";

  return (
    // <header className="py-8 xl:py-12 bg-[#d8d8d8]">
    <header className="py-8 xl:py-12 bg-[#f2f2f2]">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href=".">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">H</span>arvey
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav links={navs} setStyles={setHoverStyle} />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav links={navs} setStyles={setHoverStyle} />
        </div>
      </div>
    </header>
  );
};

export default Header;
