import { AnyAction } from "redux";
import { INews } from "types/INews";

const initialState = {
  list: [],
};

export interface IStore {
  list: INews[];
}

const movieReduserNextPage = (
  state: IStore = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "cinema/setCinema":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
export default movieReduserNextPage;
