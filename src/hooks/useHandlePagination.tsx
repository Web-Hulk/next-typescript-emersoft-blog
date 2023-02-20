import { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  return { currentPage, handlePageChange, setCurrentPage };
};

export default usePagination;
