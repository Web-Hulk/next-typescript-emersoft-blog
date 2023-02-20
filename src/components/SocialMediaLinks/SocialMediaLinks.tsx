import Link from "next/link";
import { ReactNode } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";

type SocialMediaLink = {
  href: string;
  icon: ReactNode;
};

//* Leave it in the same file because the component is small
// Define an array of social media links
const SOCIAL_MEDIA_LINKS: SocialMediaLink[] = [
  {
    href: "https://pl.linkedin.com/in/patryk-kwasek-0b9a821b3",
    icon: (
      <LinkedIn
        className="text-linkedin"
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
        <Button key={href}>
          <Link
            href={href}
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        </Button>
      ))}
    </>
  );
};

export default SocialMediaLinks;
