import React from "react";
import { NavLink } from "react-router-dom";
import { routeDeteil } from "../../../pages/DeteilPage";
import { INews } from "../../../types/INews";
import "./styles.scss";

interface INewsItemParams {
  item: INews;
}

const setCountryCode: { [key: string]: string } = {
  KR: "Republic of Korea",
  FR: "France",
  TW: "Taiwan",
  CN: "China",
  GB: "United Kingdom",
  ES: "Spain",
  AU: "Australia",
  NZ: "New Zealand",
  JP: "Japan",
  US: "United States",
};

const NewsItem: React.FC<INewsItemParams> = ({ item }) => {
  let countryCode = item?.show?.network?.country?.code;

  if (item?.network?.country?.code) {
    countryCode = item.network?.country.code || countryCode;
  }


 let countryName =
    countryCode && setCountryCode[countryCode]
      ? setCountryCode[countryCode]
      : countryCode || "no country code";





  let src = item?.show?.image?.medium || "default-image.jpg";

  if (item?.image) {
    src = item.image.medium || src;
  }

  let ratingAverage = item?.show?.rating?.average?.toFixed(0);

  if (item?.rating?.average?.toFixed(0)) {
    ratingAverage = item.rating.average.toFixed(0) || ratingAverage;
  }

  let ratingAverageSecond = item?.show?.rating?.average?.toString().slice(1);
  if (item?.rating?.average?.toString().slice(1)) {
    ratingAverageSecond =
      item.rating.average.toString().slice(1) || ratingAverageSecond;
  }

  let name = item?.show?.name;

  if (item?.name) {
    name = item.name || name;
  }

  let genres = item?.show?.genres?.join(", ");
  if (item?.genres?.join(", ")) {
    genres = item.genres.join(", ") || genres;
  }

let premiered = item?.show?.premiered?.slice(0, 4);
if (item?.premiered?.slice(0, 4)) {
  premiered = item.premiered.slice(0, 4 )|| premiered;
}

let runtime = item?.show?.runtime;
if (item?.runtime) {
  runtime = item.runtime|| runtime;

}

let id = item?.show?.id
if (item?.id) {
  id = item.id|| id;

}
  return (
    <NavLink className="wrap-setitem" to={routeDeteil(id)}>
      <div className="about-movis-wrap">
        <figure>
          <img className="poster-movis" src={src} alt="poster" />
          <div className="hover-div">
            <div className="rating-average">
              <div className="rating-average-first">{ratingAverage}</div>
              <div className="rating-average-second">{ratingAverageSecond}</div>
            </div>
            <div className="country-code">{countryName}</div>
            <div className="runtime">
              {runtime + " мин."}
            </div>
          </div>
        </figure>
      </div>

      <div className="about-movis-text">
        <div className="movies-name-old">
          <div className="name-movis">{name}</div>
          <div className="filmold">
            <p>{premiered}</p>
          </div>
        </div>
        <div className="genres-movis">{genres}</div>
      </div>
    </NavLink>
  );
};

export default NewsItem;
