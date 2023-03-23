import { useDispatch, useSelector } from "react-redux";
import { loadMovisMainPage } from "../../store/mainpage/actions";
import { getFilms } from "../../store/mainpage/selector";
import routeMain from "./routes";
import { useEffect } from "react";
import NewsList from "../../components/NewList";
import "./styles.scss";



import { TypedDispatch } from "../../store";

const MainPage = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getFilms);

  useEffect(() => {
    dispatch(loadMovisMainPage());
  }, [dispatch]);
  

  return (
    <main className="main-page">
      <section className=" main-text">
             <div className="logo-main-text">Самый популярный портал о фильмах</div>
      </section>
      <div className="container back-main">
        {newsList.length > 0 && <NewsList list={newsList.slice(0, 20)} />}
      </div>
    </main>
  );
};
export { routeMain };
export default MainPage;
