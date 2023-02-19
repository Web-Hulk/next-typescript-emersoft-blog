import Link from "next/link";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { LinkItem } from "@/types/types";
import { useMediaQuery } from "@mui/material";

const HamburgerMenu = ({ links }: { links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:1024px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // Add class to body element to disable scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      // Remove class from body element to re-enable scrolling
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isLargeScreen) {
      setIsOpen(false);
    }
  }, [isLargeScreen]);

  return (
    <div className="flex items-center justify-between lg:justify-end">
      <button
        type="button"
        className="lg:hidden block focus:outline-none z-20"
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon className="text-white" /> : <MenuIcon />}
      </button>

      <nav
        className={`lg:flex lg:items-center ${
          isOpen
            ? "flex flex-col justify-center bg-emersoft-black h-full px-8 absolute top-0 left-0 z-10 translate-x-0 w-full"
            : "hidden"
        }`}
      >
        {links.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`block mt-4 lg:inline-block lg:mt-0 lg:ml-6 font-medium ${
              isOpen
                ? "text-emersoft-green hover:text-white"
                : "text-gray-900 hover:text-gray-600"
            }`}
          >
            {name}
          </Link>
        ))}
        <Link
          href="http://localhost:3000/"
          className={`block mt-4 lg:inline-block lg:mt-0 lg:ml-6 font-medium text-emersoft-green ${
            isOpen && "text-white"
          }`}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
