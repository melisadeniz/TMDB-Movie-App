import init_user from "../data/init_user.json";

const VALIDATE_USER = "VALIDATE_USER";
const LOGOUT_USER = "LOGOUT_USER"
const ADD_FAV_MOVIES = "ADD_FAV_MOVIES"
const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES"

//ACTION
export const validateUser = (username, password) => ({
  type: VALIDATE_USER,
  payload: { username, password },
});

export const addFavList = (movieId) => ({
    type: ADD_FAV_MOVIES,
    payload: movieId
})

export const addSeenList = (movieId) => ({
    type: ADD_SEEN_MOVIES,
    payload: movieId
})

export const userLogout = () => ({
  type: LOGOUT_USER
})

//REDUCER
const userReducer = (user, action) => {
  init_user.forEach((value) => {
    user = value;
  });
  localStorage.setItem("user", user);
  switch (action.type) {
    case VALIDATE_USER:
      return action.payload.username === user.username &&
        action.payload.password === user.password
        ? { ...user, userLogin: true }
        : { ...user, userLogin: false }
        case ADD_FAV_MOVIES:
            return !user.favoriteList.favoriteFilms.includes(action.payload) ?
                { ...user, favoriteList: { favoriteFilms: [...user.favoriteList.favoriteFilms, action.payload], totalCount: user.favoriteList.totalCount + 1 } } : user     
        case ADD_SEEN_MOVIES:
            return !user.seenList.seenFilms.includes(action.payload) ?
                { ...user, seenList: { seenFilms: [...user.seenList.seenFilms, action.payload], totalCount: user.seenList.totalCount + 1 } } : user
        case LOGOUT_USER:
            return init_user
    default:
      return user;
  }
};

export { userReducer };
