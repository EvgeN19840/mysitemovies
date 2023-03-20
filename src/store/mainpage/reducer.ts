import { AnyAction } from "redux";
import { INews } from "types/INews";

const initialState = {
  list: [],
};

export interface IStore {
  list: INews[];
}

const movieReduserMainPage = (
  state: IStore = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "films/setFilms":
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};
export default movieReduserMainPage;
