const ADD_SEEN = "ADD_SEEN";
const REMOVE_SEEN = "REMOVE_SEEN";

export const addSeen = (id, title, poster_path, release_date) => ({
  type: ADD_SEEN,
  payload: {
    id,
    title,
    poster_path,
    release_date,
  }
});

export const removeSeen = (id) => ({
  type: REMOVE_SEEN,
  payload: id,
});

const seenReducer = (seen = {
  "seenFilms": [],
  "totalCount": 0
}, action) => {
  switch (action.type) {
    case ADD_SEEN:
      return {...seen, seenFilms: [...seen.seenFilms, action.payload], count: [...seen.seenFilms].length+1}
    case REMOVE_SEEN:
      return {...seen, seenFilms: [...seen?.seenFilms?.filter((item) => item.id !== action.payload)], count: [...seen.seenFilms].length-1}
    default:
      return seen;
  }
};

export {seenReducer}