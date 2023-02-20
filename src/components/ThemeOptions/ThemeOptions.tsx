import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";

type ThemeOptionsProps = {
  themeName: string;
  handleThemeName: () => void;
};

// Define the two possible themes with their respective icons
const THEMES = {
  light: <LightMode fontSize="large" className="text-yellow-400" />,
  dark: <DarkMode fontSize="large" />,
};

const ThemeOptions = ({ themeName, handleThemeName }: ThemeOptionsProps) => {
  // Helper function to return the icon for the current theme
  const setTheme = () => THEMES[themeName as keyof typeof THEMES];

  // Render a button that changes the theme when clicked
  return <IconButton onClick={handleThemeName}>{setTheme()}</IconButton>;
};

export default ThemeOptions;
