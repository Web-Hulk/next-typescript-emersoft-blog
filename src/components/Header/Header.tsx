import Avatar from "./Avatar/Avatar";
import HamburgerMenu from "./Hamburger/Hamburger";
import { LINKS } from "@/data/links";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-12">
      <Avatar name="Patryk Kwasek" imageUrl="/apple-touch-icon.png" />
      <HamburgerMenu links={LINKS} />
    </header>
  );
};

export default Header;
