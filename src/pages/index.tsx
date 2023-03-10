import Head from "next/head";
import dynamic from "next/dynamic";
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import useActiveCategory from "@/hooks/useActiveCategory";
import usePagination from "@/hooks/useHandlePagination";
import useToggle from "@/hooks/useToggle";
import { BlogData } from "../types/types";

// Dynamic Components import
const Header = dynamic(() => import("@/components/Header/Header"));
const BlogPosts = dynamic(() => import("@/components/BlogPosts/BlogPosts"));
const ChipFilters = dynamic(
  () => import("@/components/ChipFilters/ChipFilters")
);
const NoResultsFound = dynamic(
  () => import("@/components/Errors/NoResultsFound")
);
const SocialMediaLinks = dynamic(
  () => import("@/components/SocialMediaLinks/SocialMediaLinks")
);

/**
 * The main blog page component that displays the blog title, search input field,
 * category filter chips, and blog post cards.
 */
export default function Blog() {
  // Set the initial state for blog posts fetched from the server
  const [blogPosts, setBlogPosts] = useState<BlogData>({
    posts: [],
    categories: [],
  });
  const [inputValue, setInputValue] = useState<string>("");
  const {
    state: isSocialIconsVisible,
    toggleState: toggleSocialIconsVisibility,
  } = useToggle(false);
  const { activeCategory, categoryId, handleCategoryButton } =
    useActiveCategory();
  const { currentPage, handlePageChange, setCurrentPage } = usePagination();

  const immutableBlogPosts: BlogData = { ...blogPosts };

  // Call the fetchPosts function when the component is mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get("/api/getPosts").then((response) => {
      setBlogPosts(response.data);
    });
  };

  /**
   * A function that filters the blog posts by the selected category.
   * @param id The id of the selected category.
   * @param name The name of the selected category.
   */
  const fetchPostsByCategory = (id: number, name: string) => {
    axios
      .get(`/api/getPostsByCategory?id=${id}`)
      .then((response) => {
        setBlogPosts((prevState) => ({
          ...prevState,
          posts: response.data,
          categories: prevState.categories,
        }));

        handleCategoryButton(name, id);
        setCurrentPage(1);
      })
      .catch((error) => console.error(error));
  };

  /**
   * A function that fetches blog posts by search query and filters the results by the selected category.
   * @param query The search query to filter the posts.
   */
  const fetchPostsBySearchQuery = (query: string) => {
    axios
      .get(`/api/getPostsBySearchQuery?id=${categoryId}&query=${query}`)
      .then((response) => {
        const filterPosts = () => {
          setBlogPosts((prevState) => ({
            ...prevState,
            posts: response.data,
            categories: prevState.categories,
          }));
        };

        // Use a timeout to debounce the function by 500ms.
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => filterPosts(), 500);
      })
      .catch((error) => console.error(error));
  };

  // The timeout ID to debounce the search input field
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  // Handle the input change in the search input field
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    setInputValue(query);
    fetchPostsBySearchQuery(query);
  };

  // Reset input value to empty string when active category changes
  useEffect(() => {
    setInputValue("");
  }, [activeCategory]);

  return (
    <>
      <Head>
        <title>Patryk Kwasek | Emersoft - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen font-sans">
        <Suspense
          fallback={<CircularProgress className="text-emersoft-green" />}
        >
          <>
            {/* Show the additional features box if the state indicates it should be visible */}
            <Box
              className={`max-h-0 overflow-hidden transition-all duration-1000 ${
                isSocialIconsVisible && "max-h-44 bg-icons-background"
              }`}
            >
              <Box
                className={`flex justify-center transition-all duration-500 ${
                  isSocialIconsVisible
                    ? "delay-200 ease-in-out max-h-44"
                    : "max-h-0"
                }`}
              >
                <Typography
                  className={`m-2.5 transition-all duration-500 flex items-center ${
                    isSocialIconsVisible
                      ? "delay-500 ease-in-out opacity-100"
                      : "ease-in-out opacity-0"
                  }`}
                >
                  <strong>Socials:</strong>
                  <SocialMediaLinks />
                  {/* The ThemeOptions component allows users to switch between light and dark themes */}
                  {/* <ThemeOptions
                    themeName={themeValue}
                    handleThemeName={handleThemeValue}
                  /> */}
                </Typography>
              </Box>
            </Box>

            {/* The Box component contains the header, search input, filter chips, and blog posts */}
            <Box
              className={`max-w-screen-xl w-11/12 my-0 mx-auto ${
                blogPosts?.posts?.length === 0 && "h-screen mb-[-90px]"
              }`}
            >
              <Header handleAvatar={toggleSocialIconsVisibility} />

              <Box>
                <Typography
                  variant="h3"
                  className="text-emersoft-green text-3xl font-bold mb-4 uppercase"
                >
                  Hello, my name is Patryk
                </Typography>
                <Typography
                  variant="h1"
                  className="text-4xl lg:text-7xl font-bold"
                >
                  Emersoft README.md
                </Typography>

                <TextField
                  type="search"
                  placeholder="Search blog posts..."
                  onChange={handleInputChange}
                  value={inputValue}
                  className="w-full my-4"
                />

                <ChipFilters
                  immutableBlogPosts={immutableBlogPosts}
                  activeCategory={activeCategory}
                  filteredPostsByCategoryId={fetchPostsByCategory}
                />

                {blogPosts?.posts?.length > 0 ? (
                  <Suspense
                    fallback={
                      <CircularProgress className="text-emersoft-green" />
                    }
                  >
                    <BlogPosts
                      blogPosts={blogPosts}
                      immutableBlogPosts={immutableBlogPosts}
                      pageNumber={currentPage}
                      postsPerPage={6}
                      handlePagination={handlePageChange}
                    />
                  </Suspense>
                ) : (
                  <NoResultsFound />
                )}
              </Box>
            </Box>
          </>
        </Suspense>
      </main>
    </>
  );
}
