import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../store/categorypage/actions";
import { getFilmCategory } from "../../store/categorypage/selector";
import routeCategory from "./routes";
import { useEffect } from "react";
import { TypedDispatch } from "../../store";
import NewsList from "components/NewList";
import "./styles.scss";



const CategoryPage = () => {
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getFilmCategory);

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  return (
    <div className="category-page">
                   <div className="secondpage-text">Текущая категоря GIRLS</div>
      <div className="category-page-items">

        <div className="itemtext">
          {newsList.length > 0 && <NewsList list={newsList.slice(0, 8)} />}
        </div>

      </div>
    </div>
  );
};
export { routeCategory };
export default CategoryPage;
