import React from "react";
import { NavLink } from "react-router-dom";
import { routeDeteil as routeDeteilPage } from "../../../pages/DeteilPage";
import { INews } from "../../../types/INews";
import "./styles.scss";

interface InewsItemParams {
  item: INews;
}

const setCountryCode: { [key: string]: string } = {
  KR: " Republic of Korea",
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

const NewsItem: React.FC<InewsItemParams> = ({ item }) => {
  const countryCode = item.network?.country.code;

  const countryName =
    countryCode && setCountryCode[countryCode]
      ? setCountryCode[countryCode]
      : countryCode || "no country Code";

  return (
    <NavLink className="wrap-setitem" to={routeDeteilPage(item.id)}>
      <div className="about-movis-wrap ">
        <figure>
          {" "}
          <img
            className="poster-movis "
            src={item.image.medium}
            alt={"poster"}
          />
          <div className="hover-div">
            <div className="rating-average">
              <div className="rating-average-first">
                {item.rating.average &&
                  item.rating.average.toFixed(0)}
              </div>
              <div className="rating-average-second">
                {item.rating.average &&
                  item.rating.average.toString().slice(1)}
              </div>
            </div>
            <div className="country-code">{countryName}</div>
            <div className="runtime">
              {item.runtime && item.runtime + " мин."}
            </div>
          </div>
        </figure>
      </div>

      <div className="about-movis-text">
        <div className="movies-name-old">
          <div className="name-movis">{item.name}</div>
          <div className="filmold">
            <p>({item.premiered && item.premiered.slice(0, 4)})</p>{" "}
          </div>
        </div>
        <div className="genres-movis">{item.genres.join(", ")}</div>
      </div>
    </NavLink>
  );
};

export default NewsItem;
