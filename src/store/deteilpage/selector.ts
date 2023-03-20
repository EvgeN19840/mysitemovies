import {  IStoreD } from "./reducer"; 

export const getDeteilFilms = (stateD:{movieReduserDeteilPage: IStoreD}): IStoreD['movie'] => stateD.movieReduserDeteilPage.movie;
