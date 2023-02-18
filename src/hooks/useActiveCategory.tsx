import { useState } from "react";

const useActiveCategory = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [categoryId, setCategoryId] = useState<number>(1);

  const handleCategoryButton = (value: string, id: number) => {
    setActiveCategory(value);
    setCategoryId(id);
  };

  return { activeCategory, categoryId, handleCategoryButton };
};

export default useActiveCategory;
