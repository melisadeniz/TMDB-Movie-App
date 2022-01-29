const TRENDPERIOD = "TRENDPERIOD";

//ACTION
export const changeTrendValue = (value) => {
  return {
    type: TRENDPERIOD,
    payload: value,
  };
};

//REDUCER
const trendReducer = (trendValue = "week", action) => {
  switch (action.type) {
    case TRENDPERIOD:
      return action.payload;
    default:
      return trendValue;
  }
};

export default trendReducer;
