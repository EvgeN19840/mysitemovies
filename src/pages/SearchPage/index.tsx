import { useEffect } from "react";
import routeSearch from "./routes";
import { getSearchFilms } from "store/searchpage/selector";
import { useDispatch, useSelector } from "react-redux";
import { TypedDispatch } from "../../store";
import { ICategory } from "types/ICategory";
import { useParams } from "react-router-dom";
import { IDeteil } from "types/IDeteil";
import { loadSearchPage } from "store/searchpage/actions";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import NewsList from "components/NewList";
import "./styles.scss";
import NewsListSearch from "components/NewListSearch";

const SearchPage = () => {
  const { register, handleSubmit } = useForm<IDeteil>();
  const { category } = useParams<ICategory>();
  const dispatch = useDispatch<TypedDispatch>();
  const newsList = useSelector(getSearchFilms);

  const onSubmit: SubmitHandler<IDeteil> = (category) => {
    dispatch(loadSearchPage(category.name));
  };

  useEffect(() => {
    dispatch(loadSearchPage(category));
  }, [dispatch, category]);

  return (
    <div className="wrapsearch">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="searchcategory">Поиск по названию</div>
        <div className=" clearfon">
      
          <input
            className="searchinput"
            {...register("name")}
            type="text"
            placeholder="example: car"
          />
               <div className="searchresulttext">Результаты поиска:</div>

          {newsList.length > 1 ? (
            <div className="result-search-category">
              {newsList.length > 0 && <NewsListSearch ones={newsList.slice(0, 8)} />}
            </div>
          ) : (
            <>
              {" "}
              <div className="search-text">
                Введите поисковый запрос<br/>для отображения результатов
              </div>{" "}
            </>
          )}
        </div>
      </form>
      <div className="newcategory">{}</div>
    </div>
  );
};
export { routeSearch };
export default SearchPage;
