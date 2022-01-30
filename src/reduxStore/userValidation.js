import data from "../data/data.json";

const VALIDATE_USER = "VALIDATE_USER";

// const FAV_MOVIES = "ADD_FAV_MOVIES"
// const SEEN_MOVIES = "ADD_SEEN_MOVIES"

//ACTION
export const validateUser = (username, password) => ({
  type: VALIDATE_USER,
  payload: { username, password },
});

// export const favList = (movieId) => ({
//     type: FAV_MOVIES,
//     payload: movieId
// })

// export const seenList = (movieId) => ({
//     type: SEEN_MOVIES,
//     payload: movieId
// })
//REDUCER

const userReducer = (user, action) => {
  data.forEach((value) => {
    user = value;
  });
  localStorage.setItem("user", user);
  switch (action.type) {
    case VALIDATE_USER:
      return action.payload.username === user.username &&
        action.payload.password === user.password
        ? { ...user, userLogin: true }
        : { ...user, userLogin: false };
    default:
      return user;
  }
};

export { userReducer };
