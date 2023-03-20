import { AnyAction } from "redux";
import { ISearch } from "types/ISearch";

const initialState = {
  movie: [],
};

export interface IStoreD {
  movie:ISearch[];
}

const movieReduserSearchPage = (
  stateD: IStoreD = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "cinema/setCinema":
      return { ...stateD, movie: action.payload };
    default:
      return stateD;
  }
};
export default movieReduserSearchPage;
