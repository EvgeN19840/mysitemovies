import React from "react";
import NewsItemSearch from "./NewsItem";
import {ISearch} from "../../types/ISearch"

import "./styles.scss";

interface INewsListParamsSearch {
  ones: ISearch[];
}

const NewsListSearch: React.FC<INewsListParamsSearch> = ({ ones }) => (
  <div className="newslist">
    {ones.map((index) => (
      <NewsItemSearch key={index.show.id} item={index} />
    ))}
  </div>
);

export default NewsListSearch;







