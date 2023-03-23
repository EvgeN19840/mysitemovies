import React, { useEffect } from "react";
import routeDeteil from "./routes";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadMovisDeteilPage } from "store/deteilpage/actions";
import { getDeteilFilms } from "store/deteilpage/selector";
import { TypedDispatch } from "../../store";
import star from "../../pictures/star.png";

import { ID } from "types/ID";

import "./styles.scss";

const DeteilPage = () => {
  const { id } = useParams<ID>();
  const dispatch = useDispatch<TypedDispatch>();
  const news = useSelector(getDeteilFilms);

  useEffect(() => {
    dispatch(loadMovisDeteilPage(id));
  }, [dispatch]);
  let country = news.network?.country?.name && news.network.country.name;
  return (
    <section className="container newsPostItem">
      {news.id ? (
        <div className="newsDeteilWrapper">
          <img className="imgdet" src={news.image.medium} alt={"poster"} />

          <div className="wrapDeteilPage">
            <div className="movis-name-deteil">{news.name}</div>
            <div className="starrat">
              <img className="img-star-deteil" src={star} alt={"star"} />
              <div className="rating">{news.rating.average}</div>
            </div>
            <div className="movis-old">
              <div className="style-name-old">Год выхода:</div>{" "}
              {news.premiered.slice(0, 4)}
            </div>
            <div className="movis-country-deteil">
              <div className="style-name-country"> Страна: </div> {country}
            </div>

            <div className="movis-genres-deteil">
              <div className="style-name-genres"> Жанр:</div>{" "}
              {news.genres.join(", ")}{" "}
            </div>

            <div className="movis-language-deteil">
              <div className="style-name-language"> Язык:</div> {news.language}{" "}
            </div>

            <div className="movis-summary-deteil">
              <div className="style-name-summary">Описание:</div>{" "}
              {news.summary.replace(/[</p>]/gi, "")}
            </div>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <h2>ERROR</h2>{" "}
        </>
      )}
    </section>
  );
};
export { routeDeteil };

export default DeteilPage;
