import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesMainPage } from "../../store/mainpage/actions";
import { getFilms } from "../../store/mainpage/selector";
import { TypedDispatch } from "../../store";
import NewsList from "components/NewList";
import Pagination from "../../components/Pagination";
import { INews } from "types/INews";
import routeMain from "./routes";
import "./styles.scss";

const MainPage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const newsList = useSelector(getFilms);
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(20);
  const [currentList, setCurrentList] = useState<INews[]>([]);

  useEffect(() => {
    dispatch(loadMoviesMainPage());
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentList(newsList.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, newsList, dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentList(newsList.slice(startIndex, endIndex));
    if (currentList.length <= 0) {
      setTotalPages(page);
    }
  };

  return (
    <main className="main-page">
      <section className="main-text">
        <h1 className="logo-main-text">Самый популярный портал о фильмах</h1>
      </section>
      <div className="container back-main">
        {currentList.length > 0 && <NewsList list={currentList} />}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </main>
  );
};

export { routeMain };
export default MainPage;
