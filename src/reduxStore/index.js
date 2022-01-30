import { combineReducers, createStore } from "redux";
import themeReducer from "./themeSwitch";
import trendReducer from "./trendValue";
import { searchReducer } from "./searchValue";
import { paginationReducer } from "./pagination";
import { userReducer } from "./userValidation";
import { loadMoreReducer } from "./LoadMore";


const rootReducer = combineReducers({
  user: userReducer,
  trend: trendReducer,
  theme: themeReducer,
  search: searchReducer,
  pagination: paginationReducer,
  load: loadMoreReducer,
});

const store = createStore(rootReducer);

export default store;
