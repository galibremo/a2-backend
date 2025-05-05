"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

export default function Pagination({
  totalPages = 10,
  initialPage = 2,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange?.(page);
  };

  const renderPageNumbers = () => {
    const pages = [];

    // Always show first page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`w-10 h-10 flex items-center justify-center ${
          currentPage === 1
            ? "border border-white text-white"
            : "text-white hover:border hover:border-white/50"
        }`}
      >
        1
      </button>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      pages.push(
        <span
          key="ellipsis1"
          className="w-10 h-10 flex items-center justify-center text-white"
        >
          ...
        </span>
      );
    }

    // Show current page and adjacent pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage === 2) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className="w-10 h-10 flex items-center justify-center border border-white text-white"
          >
            {i}
          </button>
        );
      } else if (i !== 1 && i !== totalPages) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`w-10 h-10 flex items-center justify-center ${
              currentPage === i
                ? "border border-white text-white"
                : "text-white hover:border hover:border-white/50"
            }`}
          >
            {i}
          </button>
        );
      }
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      pages.push(
        <span
          key="ellipsis2"
          className="w-10 h-10 flex items-center justify-center text-white"
        >
          ...
        </span>
      );
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`w-10 h-10 flex items-center justify-center ${
            currentPage === totalPages
              ? "border border-white text-white"
              : "text-white hover:border hover:border-white/50"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center text-white disabled:opacity-50"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 flex items-center justify-center text-white disabled:opacity-50"
          aria-label="Next page"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
