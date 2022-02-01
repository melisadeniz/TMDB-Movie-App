import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from "./themeSwitch";
import trendReducer from "./trendValue";
import { searchReducer } from "./searchValue";
import { paginationReducer } from "./pagination";
import { userReducer } from "./userValidation";
import { loadMoreReducer } from "./LoadMore";
import { genresReducer } from "./movieGenres";

const rootReducer = combineReducers({
  user: userReducer,
  trend: trendReducer,
  theme: themeReducer,
  search: searchReducer,
  pagination: paginationReducer,
  load: loadMoreReducer,
  genres: genresReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  //whitelist: ["counter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)
export default store;
