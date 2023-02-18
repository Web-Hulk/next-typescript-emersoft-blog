import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import axios from "axios";

// Import components
import useActiveCategory from "@/hooks/useActiveCategory";
import Header from "@/components/Header/Header";
import BlogPosts from "@/components/BlogPosts/BlogPosts";
import ChipFilters from "@/components/ChipFilters/ChipFilters";
import NoResultsFound from "@/components/Errors/NoResultsFound";
import ThemeOptions from "@/components/ThemeOptions/ThemeOptions";
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

// Import types
import { BlogData } from "../types/types";

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

  // Get the active category and category filter function from the useActiveCategory hook.
  const { activeCategory, categoryId, handleCategoryButton } =
    useActiveCategory();

  // Set the initial state for the input value to an empty string.
  const [inputValue, setInputValue] = useState<string>("");

  // Set the initial state for showing or hiding additional features (such as theme setter)
  const [isAdditionalFeaturesVisible, setIsAdditionalFeaturesVisible] =
    useState(false);

  // Set the initial state for theme value to "light"
  const [themeValue, setThemeValue] = useState<string>("light");

  // Set the initial state for loading status
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Set the initial state for blog posts fetched from the server and never updated
  const [stableBlogData, setStableBlogData] = useState<BlogData>({
    posts: [],
    categories: [],
  });

  // Fetch blog posts from the server using the '/api/getPosts' API
  const fetchPosts = () => {
    setIsLoading(true);
    axios.get("/api/getPosts").then((response) => {
      console.log("Fetch posts: ", response.data);

      setBlogPosts(response.data);
      setStableBlogData(response.data);
      setIsLoading(false);
    });
  };

  // Call the fetchPosts function when the component is mounted
  useEffect(() => {
    fetchPosts();
  }, []);

  // Set the initial state for pagination page number
  const [page, setPage] = useState<number>(1);

  // Handle the change of the page number in the pagination component
  const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
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
        console.log("Fetch posts by category: ", response.data);

        setBlogPosts((prevState) => ({
          ...prevState,
          posts: response.data,
          categories: prevState.categories,
        }));

        handleCategoryButton(name, id);
        setPage(1);
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
        console.log("Fetch posts by search query: ", response.data);

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

  // Function to handle avatar click event and toggle additional features visibility
  const handleAvatar = () => {
    setIsAdditionalFeaturesVisible(!isAdditionalFeaturesVisible);
  };

  // Function to handle theme toggle and save the value to local storage
  const handleThemeValue = () => {
    const newThemeValue = themeValue === "light" ? "dark" : "light";
    setThemeValue(newThemeValue);
    localStorage.setItem("theme", newThemeValue);
  };

  // Load theme value from local storage on component mount
  useEffect(() => {
    const storedThemeValue = localStorage.getItem("theme") || "light";
    setThemeValue(storedThemeValue);
  }, []);

  return (
    <>
      {/* The Head component sets metadata for the page */}
      <Head>
        <title>Patryk Kwasek | Emersoft - Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* The main content of the page is contained within the Box and Header components */}
      <main className="h-screen">
        {/* If data is still being fetched, show a loading spinner */}
        {isLoading ? (
          <Box className="flex justify-center items-center h-screen">
            <CircularProgress className="text-emersoft-green" />
          </Box>
        ) : (
          <>
            {/* Show the additional features box if the state indicates it should be visible */}
            <Box
              className={`max-h-0 overflow-hidden transition-all duration-1000 ${
                isAdditionalFeaturesVisible &&
                "max-h-44 border-b border-gray-300"
              }`}
            >
              <Box
                className={`flex justify-center transition-all duration-500 ${
                  isAdditionalFeaturesVisible
                    ? "delay-200 ease-in-out max-h-44"
                    : "max-h-0"
                }`}
              >
                <Typography
                  className={`m-2.5 transition-all duration-500 ${
                    isAdditionalFeaturesVisible
                      ? "delay-500 ease-in-out opacity-100"
                      : "ease-in-out opacity-0"
                  }`}
                >
                  {/* The SocialMediaLinks component displays links to social media profiles */}
                  <SocialMediaLinks />
                  {/* The ThemeOptions component allows users to switch between light and dark themes */}
                  <ThemeOptions
                    themeName={themeValue}
                    handleThemeName={handleThemeValue}
                  />
                </Typography>
              </Box>
            </Box>

            {/* The Box component contains the header, search input, filter chips, and blog posts */}
            <Box
              className={`max-w-screen-xl w-11/12 my-0 mx-auto ${
                blogPosts.posts.length === 0 && "h-screen mb-[-90px]"
              }`}
            >
              {/* The Header component contains the header of the page with Avatar and Hamburger Menu */}
              <Header handleAvatar={handleAvatar} />

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

                {/* The TextField component allows searching for blog posts by keyword */}
                <TextField
                  type="search"
                  placeholder="Search blog posts..."
                  // onChange={filteredPostsBySearchInput}
                  onChange={handleInputChange}
                  value={inputValue}
                  className="w-full my-4"
                />

                {/* The ChipFilters component displays clickable chips for filtering by category */}
                <ChipFilters
                  stableBlogData={stableBlogData}
                  activeCategory={activeCategory}
                  filteredPostsByCategoryId={fetchPostsByCategory}
                />

                {/* The BlogPosts component displays the list of blog posts, or a "no results found" message if no posts match the current filter */}
                {blogPosts.posts.length > 0 ? (
                  <BlogPosts
                    blogPosts={blogPosts}
                    stableBlogData={stableBlogData}
                    pageNumber={page}
                    postsPerPage={6}
                    handlePagination={handlePagination}
                  />
                ) : (
                  <NoResultsFound />
                )}
              </Box>
            </Box>
          </>
        )}
      </main>
    </>
  );
}
