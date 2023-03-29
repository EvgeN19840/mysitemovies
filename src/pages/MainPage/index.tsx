import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesMainPage } from "../../store/mainpage/actions";
import { getFilms } from "../../store/mainpage/selector";
import { RootState, TypedDispatch } from "../../store";
import NewsList from "components/NewList";
import Pagination from "../../components/Pagination";
import { INews } from "types/INews";
import routeMain from "./routes";
import "./styles.scss";

const MainPage = () => {
  const dispatch: TypedDispatch = useDispatch();
  const newsList = useSelector(getFilms);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);

  const data = useSelector(
    (state: RootState) => state.movieReduserMainPage.list
  );
  const [currentList, setCurrentList] = useState<INews[]>([]);

  useEffect(() => {
    dispatch(loadMoviesMainPage());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (page > 5) {
      setTotalPages(totalPages + 1);
    }
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentList(newsList.slice(startIndex, endIndex));
  }, [currentPage, itemsPerPage, newsList]);

  return (
    <main className="main-page">
      <section className="main-text">
        <div className="logo-main-text">Самый популярный портал о фильмах</div>
      </section>
      <div className="container back-main">
        {currentList.length > 0 && <NewsList list={currentList} />}
      </div>
      <Pagination
        data={data}
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
