import { legacy_createStore as createStore, combineReducers, applyMiddleware, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, {ThunkDispatch} from 'redux-thunk'
import movieReduserMainPage from "./mainpage/reducer"
import movieReducer from './categorypage/reducer';
import movieReduserDeteilPage from './deteilpage/reducer';
import movieReduserSearchPage from './searchpage/reducer';
import movieReduserNextPage from './nextpage/reducer';

const rootReducer = combineReducers({
    movieReduserNextPage,
    movieReduserMainPage,
    movieReducer,
    movieReduserDeteilPage,
    movieReduserSearchPage,
 
})


const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type ReduxState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export default store;

