import { useState } from "react";

const useActiveCategory = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCategoryButton = (value: string) => {
    setActiveCategory(value);
  };

  return { activeCategory, handleCategoryButton };
};

export default useActiveCategory;
