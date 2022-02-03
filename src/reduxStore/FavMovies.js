const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (id, title, poster_path, release_date) => ({
  type: ADD_FAVORITE,
  payload: {
    id,
    title,
    poster_path,
    release_date,
  }
});

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

const favoriteReducer = (favorites = {
  "favoriteFilms": [],
  "totalCount": 0
}, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {...favorites, favoriteFilms: [...favorites.favoriteFilms, action.payload], count: [...favorites.favoriteFilms].length+1}
    case REMOVE_FAVORITE:
      return {...favorites, favoriteFilms: [...favorites?.favoriteFilms?.filter((item) => item.id !== action.payload)], count: [...favorites.favoriteFilms].length-1}
    default:
      return favorites;
  }
};

export default favoriteReducer