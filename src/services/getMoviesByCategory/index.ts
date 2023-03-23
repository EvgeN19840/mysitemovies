import axios, { AxiosResponse } from "axios";

const getMoviesByCategory = (): Promise<AxiosResponse> => {
  const requestUrl = "https://api.tvmaze.com/search/shows?q=girls";

  return axios.get(requestUrl);
};
export default getMoviesByCategory;
