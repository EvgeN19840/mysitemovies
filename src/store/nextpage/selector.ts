import { IStore } from "./reducer";

export const getNextFilms = (state: {
  movieReduserNextPage: IStore;
}): IStore["list"] => state.movieReduserNextPage.list;
