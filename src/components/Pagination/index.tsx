import "./styles.scss";

interface Props {
  itemsPerPage: number;
  totalPages: number;
  onPageChange: (page: number, itemsPerPage: number) => void;
  currentPage: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
}: Props) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page, itemsPerPage);
    }
  };

  const handleNextPageClick = () => {
    const nextPage = currentPage + 1;
    handlePageChange(nextPage);
  };

  const handlePrevPageClick = () => {
    const prevPage = currentPage - 1;
    handlePageChange(prevPage);
  };

  const handleLastPageClick = () => {
    handlePageChange(totalPages);
  };

  const handleFirstPageClick = () => {
    handlePageChange(1);
  };

  const getPageButtons = () => {
    const pageButtons = [];
    const maxButtonsToShow = 7;

    let startIndex = Math.max(
      currentPage - Math.floor(maxButtonsToShow / 2),
      1
    );
    let endIndex = Math.min(startIndex + maxButtonsToShow - 1, totalPages);

    if (endIndex - startIndex < maxButtonsToShow - 1) {
      startIndex = Math.max(endIndex - maxButtonsToShow + 1, 1);
    }

    for (let i = startIndex; i <= endIndex; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`button page-button ${currentPage === i ? "active" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            handlePageChange(i);
          }}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <ul className="pagin">
      <li className="first-page">
        <button className="button" onClick={handleFirstPageClick}>
          First
        </button>
      </li>
      <li className="prev-page">
        <button className="button" onClick={handlePrevPageClick}>
          Prev
        </button>
      </li>
      <li className="numberButton">{getPageButtons()}</li>
      <li className="next-page">
        <button className="button" onClick={handleNextPageClick}>
          Next
        </button>
      </li>
      <li className="last-page">
        <button className="button" onClick={handleLastPageClick}>
          Last
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
