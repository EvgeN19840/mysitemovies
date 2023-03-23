import { TypedDispatch } from "..";
import getNews from "../../services/getNews";

import { IStore } from "./reducer";

export const setMoviesMainPage = (payload: IStore["list"]) => {
  console.log(payload)
  return {
    type: "films/setFilms",
    payload,
    
  };
};

export const loadMovisMainPage = () => async (dispatch: TypedDispatch) => {
  try {
    const response = await getNews();

    const payload = Array.isArray(response.data) ? response.data: [response.data];
    console.log(payload)
    dispatch(setMoviesMainPage(payload));
  } catch (e) {
    console.log(e, "у нас проблемы!!!!");
  }
};

   
