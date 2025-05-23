import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxVisiblePages = 2;

  
  let startPage = currentPage;
  if (startPage + maxVisiblePages - 1 > totalPages) {
    startPage = totalPages - maxVisiblePages + 1;
  }
  if (startPage < 1) startPage = 1;

  const visiblePages = Array.from({ length: maxVisiblePages }, (_, i) => startPage + i)
    .filter(page => page <= totalPages);

  return (
    <div className="flex justify-center gap-2 my-4">
      {/* Previous Button */}
      {currentPage > 1 && (
        <button
          className="px-3 py-1 border bg-gray-200"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
      )}

      {/* Page Number Buttons */}
      {visiblePages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border ${page === currentPage ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      {currentPage < totalPages && (
        <button
          className="px-3 py-1 border bg-gray-200"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;