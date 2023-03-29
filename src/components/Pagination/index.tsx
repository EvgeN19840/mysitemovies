import { Link } from "react-router-dom";
import { INews } from "types/INews";

import "./styles.scss";

interface Props {
  data: INews[]
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
      <button onClick={handlePrevPageClick}>
      back
    </button>
      </li>
      {[...Array(totalPages)].map((e, index) => (
        <li key={index}>
          <a
            href={`/${index + 1}`}
            onClick={(event) => {
              event.preventDefault();
              handlePageChange(index + 1);
            }}
          >
            {index + 1}
          </a>
        </li>
      ))}
      <li className="next-page">
      <button onClick={handleNextPageClick}>
      next
    </button>
      </li>
    </ul>
  );
};

export default Pagination;
