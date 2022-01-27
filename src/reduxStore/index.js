import {combineReducers, createStore} from "redux"
import themeReducer from "./themeSwitch";
import trendReducer from "./trendValue";

const rootReducer = combineReducers({
  trend: trendReducer,
  theme: themeReducer
})

const store = createStore(rootReducer)

export default store