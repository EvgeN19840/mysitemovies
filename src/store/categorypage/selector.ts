import { IStore } from "./reducer"; 

export const getFilmCategory = (state:{movieReducer: IStore}): IStore['list'] => state.movieReducer.list;



