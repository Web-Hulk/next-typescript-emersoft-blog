import { Box, Chip } from "@mui/material";

type ChipFilterProps = {
  name: string;
  slug: string;
  activeCategory: string;
  filteredPostsByCategoryId: () => void;
};

const ChipFilter = ({
  name,
  slug,
  activeCategory,
  filteredPostsByCategoryId,
}: ChipFilterProps) => {
  return (
    <Box mr={2} mb={2}>
      <Chip
        label={name}
        variant="filled"
        className={`${
          slug === activeCategory && "text-white bg-black"
        } px-1 font-bold hover:bg-black hover:text-white`}
        onClick={filteredPostsByCategoryId}
      />
    </Box>
  );
};

export default ChipFilter;
