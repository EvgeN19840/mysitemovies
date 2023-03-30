import getNewCategory from "services/getNewCategory";
import { TypedDispatch } from "store";
import { IStoreD } from "./reducer";

export const setSearchPage = (payload: IStoreD["movie"]) => {
  return {
    type: "cinema/setCinema",
    payload,
  };
};
export const loadSearchPage =
  (category: string) => async (dispatch: TypedDispatch) => {
    try {
      const response = await getNewCategory(category);
      dispatch(setSearchPage(response.data));
    } catch (e) {
      console.log(e, "у нас проблемы!!!!");
    }
  };
