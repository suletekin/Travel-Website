import React from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <BootstrapPagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handleClick(page)}
        >
          {page}
        </BootstrapPagination.Item>
      );
    }
    return items;
  };

  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {renderPaginationItems()}
      <BootstrapPagination.Next
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </BootstrapPagination>
  );
}

export default Pagination;
