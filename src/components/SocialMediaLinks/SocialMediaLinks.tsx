import Link from "next/link";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ReactNode } from "react";

type SocialMediaLink = {
  href: string;
  icon: ReactNode;
};

const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: "https://pl.linkedin.com/in/patryk-kwasek-0b9a821b3",
    icon: (
      <LinkedIn
        className="text-[#0077B5]"
        fontSize="large"
        titleAccess="LinkedIn profile"
      />
    ),
  },
  {
    href: "https://github.com/Web-Hulk",
    icon: (
      <GitHub
        className="text-black"
        fontSize="large"
        titleAccess="Github profile"
      />
    ),
  },
];

const SocialMediaLinks = () => {
  return (
    <>
      {SOCIAL_MEDIA_LINKS.map(({ href, icon }) => (
        <Link
          key={href}
          href={href}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon}
        </Link>
      ))}
    </>
  );
};

export default SocialMediaLinks;
