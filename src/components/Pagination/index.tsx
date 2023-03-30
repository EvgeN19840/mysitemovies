import { Link } from "react-router-dom";
import { INews } from "types/INews";

import "./styles.scss";

interface Props {
  data: INews[];
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

  return (
    <ul className="pagin">
      <li className="prev-page">
        <button className="button" onClick={handlePrevPageClick}>
          Prev Page
        </button>
      </li>
      {[...Array(totalPages)].map((e, index) => (
        <li key={index}>
          <button
            className={currentPage === index + 1 ? "active button" : "button"}
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(index + 1);
            }}
          >
            {index + 1}
          </button>
        </li>
      ))}
      <li className="next-page">
        <button className="button" onClick={handleNextPageClick}>
          Next Page
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
