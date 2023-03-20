import { TypedDispatch } from "..";
import getMoviesByCategory from "../../services/getNewCateg";

import { IStore } from "./reducer";

export const setMovies = (payload: IStore["list"])  => {
  return {
    type: "films/setFilms",
    payload,
  };
};

export const loadMovies = () => async (dispatch: TypedDispatch) => {
  try {
    const response = await getMoviesByCategory();
    dispatch(setMovies(response.data));
  
  } catch (e) {
    console.log(e, "у нас проблемы!!!!");
  }
};
