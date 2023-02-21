import Image from "next/legacy/image";
import { Box } from "@mui/system";

type AvatarProps = {
  name: string;
  imageUrl: string;
  handleAvatar: () => void;
};

const Avatar = ({ name, imageUrl, handleAvatar }: AvatarProps) => {
  return (
    <Box className="flex items-center">
      <Image
        src={imageUrl}
        alt="Avatar"
        aria-label="Patryk Kwasek's Avatar"
        title="Afraid to click the avatar? Don't be a chicken, uncover the mystery inside!"
        width={48}
        height={48}
        className="rounded-full cursor-pointer"
        priority
        onClick={handleAvatar}
      />

      <span className="font-bold ml-4">{name}</span>
    </Box>
  );
};

export default Avatar;
