import { AnyAction } from "redux";
import { IDeteil } from "types/IDeteil";

const initialState = {
  movie: {} as IDeteil,
};

export interface IStoreD {
  movie: IDeteil;
}

const movieReduserDeteilPage = (
  stateD: IStoreD = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "cinema/setCinema":
      return { ...stateD, movie: action.payload};
    default:
      return stateD;
  }
};
export default movieReduserDeteilPage;
