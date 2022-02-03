const SEARCH = "SEARCH";

//ACTION
export const searchValue = (value) => ({
  type: SEARCH,
  payload: value,
});

//REDUCER
const searchReducer = (value = "", action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return value;
  }
};

export default searchReducer ;
