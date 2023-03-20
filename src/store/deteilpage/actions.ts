import getOneNews from "services/getOneNews";
import { TypedDispatch } from "store";

import { IStoreD } from "./reducer";

export const setMoviesDeteilPage = (payload: IStoreD["movie"]) => {
  return {
    type: "cinema/setCinema",
    payload,
  };
};

export const loadMovisDeteilPage =
  (id: string) => async (dispatch: TypedDispatch) => {
    try {
      const response = await getOneNews(id);
      dispatch(setMoviesDeteilPage(response.data));
    } catch (e) {
      console.log(e, "у нас проблемы!!!!");
    }
  };
