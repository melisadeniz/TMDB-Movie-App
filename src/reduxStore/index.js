import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from "./themeSwitch";
import trendReducer from "./trendValue";
import searchReducer from "./searchValue";
import paginationReducer from "./pagination";
import userReducer  from "./userValidation";
import genreReducer  from "./movieGenres";
import seenReducer  from "./SeenMovies";
import favoriteReducer from "./FavMovies";
import filterReducer from "./SortFilter";

const rootReducer = combineReducers({
  user: userReducer,
  trend: trendReducer,
  theme: themeReducer,
  search: searchReducer,
  pagination: paginationReducer,
  genres: genreReducer,
  seen: seenReducer,
  favorite: favoriteReducer,
  filteredData: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default store
