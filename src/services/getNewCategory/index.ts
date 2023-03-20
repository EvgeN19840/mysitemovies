import axios, { AxiosResponse } from "axios";

const getNewCategory = (category: string): Promise<AxiosResponse> => {
  const requestUrl = `https://api.tvmaze.com/search/shows?q=${category}`;

  return axios.get(requestUrl);
};
export default getNewCategory;



