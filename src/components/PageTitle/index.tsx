import React from "react";

import "./styles.scss";

export interface IPageTitleParams {
  title: string;
}

const PageTitle = ({ title }: IPageTitleParams) => (
  <div className="pageTitle">{title}</div>
);
export default PageTitle;
