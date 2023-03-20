import { IStore } from "./reducer"; 

export const getFilms = (state:{movieReduserMainPage: IStore}): IStore['list'] => state.movieReduserMainPage.list;