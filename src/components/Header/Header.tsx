import Avatar from "./Avatar/Avatar";
import HamburgerMenu from "./Hamburger/Hamburger";
import { NAV_LINKS } from "@/data/links";

type HeaderProps = {
  handleAvatar: () => void;
};

const Header = ({ handleAvatar }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center py-12">
      <Avatar
        name="Patryk Kwasek"
        imageUrl="/avatar.png"
        handleAvatar={handleAvatar}
      />

      <HamburgerMenu links={NAV_LINKS} />
    </header>
  );
};

export default Header;
