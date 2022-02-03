const LOAD_MORE = "LOAD_MORE";

export const loadMoreMovies = (data) => ({
  type: LOAD_MORE,
  payload: data,
})

const loadMoreReducer = (loadMoreData = [], action) => {
  switch(action.type) {
    case LOAD_MORE:
      return [...loadMoreData, action.payload]
    default:
      return loadMoreData
  }
}

export default loadMoreReducer;