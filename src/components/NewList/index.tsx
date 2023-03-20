import React from "react";
import NewsItem from "./NewsItem";

import { INews } from "../../types/INews";
import "./styles.scss";

interface INewsListParams {
  list: INews[];
}

const NewsList: React.FC<INewsListParams> = ({ list }) => (
  <div className="newslist">
    {list.map((news) => (
      <NewsItem key={news.id} item={news} />
    ))}
  </div>
);

export default NewsList;







