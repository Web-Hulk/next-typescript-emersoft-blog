import dynamic from "next/dynamic";
import { NAV_LINKS } from "@/data/links";
const Avatar = dynamic(() => import("./Avatar/Avatar"));
const Hamburger = dynamic(() => import("./Hamburger/Hamburger"));

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

      <Hamburger links={NAV_LINKS} />
    </header>
  );
};

export default Header;
