import { useState } from "react";

const useActiveCategory = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [categoryId, setCategoryId] = useState<number>(1);

  /**
   * A function that set active category and category id.
   * @param id The id of the selected category.
   * @param name The name of the selected category.
   */
  const handleCategoryButton = (value: string, id: number) => {
    setActiveCategory(value);
    setCategoryId(id);
  };

  return { activeCategory, categoryId, handleCategoryButton };
};

export default useActiveCategory;
