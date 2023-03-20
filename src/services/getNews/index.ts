import axios, { AxiosResponse } from "axios";

const getNews = (): Promise<AxiosResponse> => {
  const requestUrl = "https://api.tvmaze.com/shows";
  return axios.get(requestUrl);
};
export default getNews;

