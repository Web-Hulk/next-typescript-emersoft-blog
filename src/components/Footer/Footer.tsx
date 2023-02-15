import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const FOOTER_LINKS = [
  {
    href: "https://pl.linkedin.com/in/patryk-kwasek-0b9a821b3",
    icon: (
      <LinkedIn
        className="text-[#0077B5]"
        fontSize="medium"
        titleAccess="LinkedIn profile"
      />
    ),
  },
  {
    href: "https://github.com/Web-Hulk",
    icon: (
      <GitHub
        className="text-black"
        fontSize="medium"
        titleAccess="Github profile"
      />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-8">
      <Box className="flex justify-end max-w-screen-xl w-11/12 my-0 mx-auto">
        <Typography>
          <Link
            href="https://pl.linkedin.com/in/patryk-kwasek-0b9a821b3"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              className="text-[#0077B5]"
              fontSize="medium"
              titleAccess="LinkedIn profile"
            />
          </Link>
        </Typography>

        <Typography>
          <Link
            href="https://github.com/Web-Hulk"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              className="text-black"
              fontSize="medium"
              titleAccess="Github profile"
            />
          </Link>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
