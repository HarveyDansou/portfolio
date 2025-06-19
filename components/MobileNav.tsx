import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

interface Props {
  links: { name: string; path: string }[];
  setStyles: (link: string) => boolean | string;
}

const MobileNav = ({ links, setStyles }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex justify-center items-center">
        <CiMenuBurger className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col bg-[#d8d8d8]">
        {/* logo */}
        <div className="text-center text-2xl mt-32 mb-40">
          <Link href="/">
            <h1 className="text-4xl font-bold">
              harvey
              <span className="text-accent">_</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${setStyles(
                  link.path
                )} capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
