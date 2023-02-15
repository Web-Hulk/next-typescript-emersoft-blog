import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { LinkItem } from "@/types/types";

const HamburgerMenu = ({ links }: { links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between lg:justify-end">
      <button
        type="button"
        className="lg:hidden block focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}>
        {links.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 lg:inline-block lg:mt-0 md:ml-6 text-gray-900 font-medium hover:text-gray-600"
          >
            {name}
          </Link>
        ))}
        <Link
          href="http://localhost:3000/"
          className="block mt-4 lg:inline-block lg:mt-0 md:ml-6 text-gray-900 font-medium hover:text-emersoft-green"
        >
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
