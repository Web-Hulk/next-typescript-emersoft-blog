import Avatar from "./Avatar/Avatar";
import HamburgerMenu from "./Hamburger/Hamburger";
import { LINKS } from "@/data/links";

type HeaderProps = {
  handleAvatar: () => void;
};

const Header = ({ handleAvatar }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center py-12">
      <Avatar
        name="Patryk Kwasek"
        imageUrl="/apple-touch-icon.png"
        handleAvatar={handleAvatar}
      />
      <HamburgerMenu links={LINKS} />
    </header>
  );
};

export default Header;
