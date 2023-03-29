
import getNews from "services/getNews";
import { TypedDispatch } from "store";
import { IStore } from "./reducer";

export const setNextPage = (payload: IStore["list"]) => {
  return {
    type: "cinema/setCinema",
    payload,
  };
};
export const loadNextPage =
  (event: string) => async (dispatch: TypedDispatch) => {
    try {
      const response = await getNews();
      dispatch(setNextPage(response.data));
    } catch (e) {
      console.log(e, "у нас проблемы!!!!");
    }
  };
