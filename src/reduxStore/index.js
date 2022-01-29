import { combineReducers, createStore } from "redux";
import themeReducer from "./themeSwitch";
import trendReducer from "./trendValue";
import { searchReducer } from "./searchValue";
import { sliderReducer } from "./Slider";

const rootReducer = combineReducers({
  trend: trendReducer,
  theme: themeReducer,
  search: searchReducer,
  slider: sliderReducer,
});

const store = createStore(rootReducer);

export default store;
