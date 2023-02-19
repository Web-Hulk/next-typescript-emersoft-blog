import Link from "next/link";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { ReactNode } from "react";
import { Button } from "@mui/material";

// Define a type for social media links
type SocialMediaLink = {
  href: string;
  icon: ReactNode;
};

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
    // Map over the social media links and return a Button with a Link and an icon for each link
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
