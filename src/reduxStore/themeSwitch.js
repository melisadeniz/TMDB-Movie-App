export const SWITCH_THEME = "SWITCH_THEME";

//ACTION
export const switchTheme = (value = true) => {
  return {
    type: SWITCH_THEME,
    payload: value,
  };
};

//REDUCER
const themeReducer = (theme = true, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return !action.payload;
    default:
      return theme;
  }
};

export default themeReducer;
