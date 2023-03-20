import { TypedDispatch } from "..";
import getNews from "../../services/getNews";

import { IStore } from "./reducer";

export const setMoviesMainPage = (payload: IStore["list"]) => {
  return {
    type: "films/setFilms",
    payload,
  };
};

export const loadMovisMainPage = () => async (dispatch: TypedDispatch) => {
  try {
    const response = await getNews();
    dispatch(setMoviesMainPage(response.data));

  } catch (e) {
    console.log(e, "у нас проблемы!!!!");
  }
};
