import axios, { AxiosResponse } from "axios";

const getOneNews = (id: string): Promise<AxiosResponse> => {
  const requestUrl = `https://api.tvmaze.com/shows/${id}`;
  return axios.get(requestUrl);
};
export default getOneNews;



