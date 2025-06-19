import Link from "next/link";

interface Props {
  links: { name: string; path: string }[];
  setStyles: (link: string) => boolean | string;
}

const Nav = ({ links, setStyles }: Props) => {
  return (
    <nav className="flex gap-8">
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
  );
};

export default Nav;
