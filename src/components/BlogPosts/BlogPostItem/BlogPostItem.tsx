import { BlogData } from "@/types/types";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";

type BlogPostItemProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: any;
  stableBlogData: BlogData;
};

const BlogPostItem = ({
  title,
  excerpt,
  imageUrl,
  categories,
  stableBlogData,
}: BlogPostItemProps) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      {/* Card component to display blog post */}
      {/* background-color: #9b9b9b; - BACKGROUND COLOR FOR DARK */}
      <Card className="min-h-[525px] h-full rounded-3xl cursor-pointer shadow-lg shadow-slate-200  hover:-translate-y-4">
        {/* Display the post's featured image */}
        {imageUrl ? (
          <CardMedia
            className="w-full h-1/2 rounded-t-3xl"
            image={imageUrl}
            title={title}
          />
        ) : (
          <Skeleton variant="rectangular" width="100%" height="200px" />
        )}

        <CardContent>
          {/* Display the post's categories */}
          <Typography className="my-2 text-blue-600 font-bold">
            {categories.map((categoryId: number) => {
              const filteredCategory = stableBlogData.categories.find(
                (category) => category.id === categoryId
              );

              {
                /* Only display the category if it exists and is not "All" */
              }
              if (!filteredCategory || filteredCategory.name === "All") {
                return null;
              }

              return (
                <span key={filteredCategory.id} className="mr-2">
                  {filteredCategory.name}
                </span>
              );
            })}
          </Typography>

          {/* Display the post's title */}
          <Typography
            variant="h5"
            component="h2"
            className="mb-3 font-semibold"
          >
            {title}
          </Typography>

          {/* Display the post's excerpt */}
          <Typography variant="body2" component="p" className="text-gray-400">
            {excerpt}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogPostItem;
