import BlogData from "@/types/types";
import { Box } from "@mui/material";
import ChipFilter from "./ChipFilter/ChipFilter";

type ChipFiltersProps = {
  stableBlogData: BlogData;
  activeCategory: string;
  filteredPostsByCategoryId: (id: number, slug: string) => void;
};

const ChipFilters = ({
  stableBlogData,
  activeCategory,
  filteredPostsByCategoryId,
}: ChipFiltersProps) => {
  return (
    <Box className="flex overflow-y-auto">
      {stableBlogData.categories.map(({ id, name, slug }) => (
        <ChipFilter
          key={slug}
          slug={slug}
          name={name}
          activeCategory={activeCategory}
          filteredPostsByCategoryId={() => filteredPostsByCategoryId(id, slug)}
        />
      ))}
    </Box>
  );
};

export default ChipFilters;
