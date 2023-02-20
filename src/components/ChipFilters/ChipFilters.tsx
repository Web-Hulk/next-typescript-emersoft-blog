import { Box } from "@mui/material";
import ChipFilter from "./ChipFilter/ChipFilter";
import { BlogData } from "@/types/types";

type ChipFiltersProps = {
  immutableBlogPosts: BlogData;
  activeCategory: string;
  filteredPostsByCategoryId: (id: number, slug: string) => void;
};

const ChipFilters = ({
  immutableBlogPosts,
  activeCategory,
  filteredPostsByCategoryId,
}: ChipFiltersProps) => {
  return (
    <Box className="flex overflow-y-auto">
      {immutableBlogPosts.categories.map(({ id, name, slug }) => (
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
