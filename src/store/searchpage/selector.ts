import {  IStoreD } from "./reducer"; 

export const getSearchFilms = (stateD:{movieReduserSearchPage: IStoreD}): IStoreD['movie'] => stateD.movieReduserSearchPage.movie;
