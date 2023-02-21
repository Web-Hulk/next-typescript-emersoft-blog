import {
  Box,
  Card,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { BlogData } from "@/types/types";
import Image from "next/image";

type BlogPostItemProps = {
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: any;
  immutableBlogPosts: BlogData;
};

const BlogPostItem = ({
  title,
  excerpt,
  imageUrl,
  categories,
  immutableBlogPosts,
}: BlogPostItemProps) => {
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card className="min-h-[525px] h-full rounded-3xl cursor-pointer shadow-lg shadow-slate-200  hover:-translate-y-1">
        {imageUrl ? (
          <Box className="w-full h-1/2 rounded-t-3xl relative">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
          </Box>
        ) : (
          <Skeleton variant="rectangular" width="100%" height="200px" />
        )}

        <CardContent>
          <Typography className="my-2 text-blue-600 font-bold">
            {categories.map((categoryId: number) => {
              const filteredCategory = immutableBlogPosts.categories.find(
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

          <Typography
            variant="h5"
            component="h2"
            className="mb-3 font-semibold"
          >
            {title}
          </Typography>

          <Typography variant="body2" component="p" className="text-gray-400">
            {excerpt}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BlogPostItem;
