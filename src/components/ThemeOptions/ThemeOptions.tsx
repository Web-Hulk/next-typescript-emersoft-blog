import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type ThemeOptionsProps = {
  themeName: string; // Theme name must be either 'light' or 'dark'
  handleThemeName: () => void;
};

// Define the available themes with their corresponding icons
const THEMES = {
  light: <LightMode fontSize="large" className="text-yellow-400" />,
  dark: <DarkMode fontSize="large" />,
};

const ThemeOptions = ({ themeName, handleThemeName }: ThemeOptionsProps) => {
  // A function to set the theme based on the themeName prop
  const setTheme = () => THEMES[themeName as keyof typeof THEMES];

  return <IconButton onClick={handleThemeName}>{setTheme()}</IconButton>;
};

export default ThemeOptions;
