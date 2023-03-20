import axios, { AxiosResponse } from "axios";

const getMoviesByCategory = (): Promise<AxiosResponse> => {
  const requestUrl = "https://api.tvmaze.com/shows?page=1";

  return axios.get(requestUrl);
};
export default getMoviesByCategory;
