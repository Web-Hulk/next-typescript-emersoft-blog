import { Box } from "@mui/system";
import Image from "next/image";

type AvatarProps = {
  name: string;
  imageUrl: string;
  handleAvatar: () => void;
};

// Define a new functional component called `Avatar`
const Avatar = ({ name, imageUrl, handleAvatar }: AvatarProps) => {
  // Return JSX containing a `Box` component and an `Image` component
  return (
    <Box className="flex items-center">
      {/* Render an `Image` component with the source, dimensions, alt text, and styling */}
      <Image
        src={imageUrl}
        width={150}
        height={150}
        alt="Avatar"
        aria-label="Patryk Kwasek's Avatar"
        className="w-12 h-12 mr-4 rounded-full cursor-pointer"
        priority
        onClick={handleAvatar}
        title="Afraid to click the avatar? Don't be a chicken, uncover the mystery inside!"
      />
      {/* Render a `span` element containing the name */}
      <span className="font-bold">{name}</span>
    </Box>
  );
};

// Export the `Avatar` component as the default export of the module
export default Avatar;
