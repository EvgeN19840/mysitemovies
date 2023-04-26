import React from "react";
import NewsItem from "./NewsItem";
import { INews } from "../../types/INews";
import "./styles.scss";

interface INewsListParams {
  list: INews[];
  
}

const NewsList = ({ list }: INewsListParams) => (
  <div className="newslist">
    {list.map((news, index) => (
      <NewsItem key={index} item={news} />
    ))}
  </div>
);

export default NewsList;






