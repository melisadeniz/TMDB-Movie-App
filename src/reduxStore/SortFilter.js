
const FILTER_DATA = "FILTER_DATA";
const RESET_DATA = "RESET_DATA";

export const addGenres = (data) => ({
  type: FILTER_DATA,
  payload: data,
})

export const resetData = (data) => ({
  type: RESET_DATA,
  payload: data,
})

const filterReducer = (filteredData = [], action) => {
  switch(action.type) {
    case FILTER_DATA:
      return [...filteredData, action.payload]
    case RESET_DATA:
      return filteredData = []
    default:
      return filteredData
  }
}

export default filterReducer;