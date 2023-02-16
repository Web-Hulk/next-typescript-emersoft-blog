import { DarkMode, LightMode } from "@mui/icons-material";

type ThemeOptionsProps = {
  themeName: string;
};

const ThemeOptions = ({ themeName }: ThemeOptionsProps) => {
  const setTheme = () => {
    switch (themeName) {
      case "dark":
        return <DarkMode fontSize="large" />;
      default:
        return <LightMode fontSize="large" className="text-yellow-400" />;
    }
  };

  return <>{setTheme()}</>;
};

export default ThemeOptions;
