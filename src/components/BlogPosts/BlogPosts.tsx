import dynamic from "next/dynamic";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { BlogData } from "@/types/types";
const BlogPostItem = dynamic(() => import("./BlogPostItem/BlogPostItem"));

type BlogPostsProps = {
  blogPosts: BlogData;
  immutableBlogPosts: BlogData;
  pageNumber: number;
  postsPerPage: number;
  handlePagination: (e: React.ChangeEvent<unknown>, value: number) => void;
};

const BlogPosts = ({
  blogPosts,
  immutableBlogPosts,
  pageNumber,
  postsPerPage,
  handlePagination,
}: BlogPostsProps) => {
  const startIndex = (pageNumber - 1) * postsPerPage;
  const postsToDisplay = blogPosts.posts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <Box>
      <Typography variant="h2" className="text-3xl font-medium mb-3">
        Featured Posts
      </Typography>

      {/* Blog posts list */}
      <Grid container spacing={5}>
        {postsToDisplay.map(({ id, title, excerpt, imageUrl, categories }) => (
          <BlogPostItem
            key={`Post-${id}`}
            title={title}
            excerpt={excerpt}
            imageUrl={imageUrl}
            categories={categories}
            immutableBlogPosts={immutableBlogPosts}
          />
        ))}
      </Grid>

      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(blogPosts.posts.length / 6)}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          className="flex justify-center my-4"
          page={pageNumber}
          onChange={handlePagination}
        />
      </Stack>
    </Box>
  );
};

export default BlogPosts;
