const SLIDER = "SLIDER";

export const sliderHandler = (currPage, perPage) => ({
  type: SLIDER,
  payload: { currPage, perPage },
});

const sliderReducer = (currPage = 1, action) => {
  switch (action.type) {
    case SLIDER:
      return action.payload.currPage * action.payload.perPage;
    default:
      return currPage;
  }
};

export { sliderReducer };
