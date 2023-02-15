import BlogData from "@/types/types";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import BlogPostItem from "./BlogPostItem/BlogPostItem";

type BlogPostsProps = {
  blogPosts: BlogData;
  stableBlogData: BlogData;
};

const BlogPosts = ({ blogPosts, stableBlogData }: BlogPostsProps) => {
  return (
    <Box>
      <Typography variant="h2" className="text-3xl font-medium mb-3">
        Featured Posts
      </Typography>

      <Grid container spacing={5}>
        {blogPosts.posts.map(({ id, title, excerpt, imageUrl, categories }) => (
          <BlogPostItem
            key={`Post-${id}`}
            title={title}
            excerpt={excerpt}
            imageUrl={imageUrl}
            categories={categories}
            stableBlogData={stableBlogData}
          />
        ))}
      </Grid>

      {/* Pagination */}
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(blogPosts.posts.length / 6)}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          className="flex justify-center my-4"
        />
      </Stack>
    </Box>
  );
};

export default BlogPosts;
