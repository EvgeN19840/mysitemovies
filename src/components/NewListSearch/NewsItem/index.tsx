import React from "react";
import { NavLink } from "react-router-dom";
import { routeDeteil as routeDeteilPage } from "../../../pages/DeteilPage";
import {ISearch} from "../../../types/ISearch"
import "./styles.scss";

interface InewsItemParams {
  item: ISearch;
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

const NewsItemSearch: React.FC<InewsItemParams> = ({ item }) => {
  const countryCode = item.show.network?.country.code;

  const countryName =
    countryCode && setCountryCode[countryCode]
      ? setCountryCode[countryCode]
      : countryCode || "no country Code";

  return (
    <NavLink className="wrap-setitem" to={routeDeteilPage(item.show.id)}>
      <div className="about-movis-wrap ">
        <figure>
          {" "}
          <img
            className="poster-movis "
            src={item.show.image.medium}
            alt={"poster"}
          />
          <div className="hover-div">
            <div className="rating-average">
              <div className="rating-average-first">
                {item.show.rating.average &&
                  item.show.rating.average.toFixed(0)}
              </div>
              <div className="rating-average-second">
                {item.show.rating.average &&
                  item.show.rating.average.toString().slice(1)}
              </div>
            </div>
            <div className="country-code">{countryName}</div>
            <div className="runtime">
              {item.show.runtime && item.show.runtime + " мин."}
            </div>
          </div>
        </figure>
      </div>

      <div className="about-movis-text">
        <div className="movies-name-old">
          <div className="name-movis">{item.show.name}</div>
          <div className="filmold">
            <p>({item.show.premiered && item.show.premiered.slice(0, 4)})</p>{" "}
          </div>
        </div>
        <div className="genres-movis">{item.show.genres.join(", ")}</div>
      </div>
    </NavLink>
  );
};

export default NewsItemSearch;
