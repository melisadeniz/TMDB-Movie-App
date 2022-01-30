const PAGE_NUM = "PAGE_NUM";

export const paginationHandler = (currPage, perPage) => ({
  type: PAGE_NUM,
  payload: { currPage, perPage },
});

const paginationReducer = (currPage = 1, action) => {
  switch (action.type) {
    case PAGE_NUM:
      return action.payload.currPage * action.payload.perPage;
    default:
      return currPage;
  }
};

export { paginationReducer };
