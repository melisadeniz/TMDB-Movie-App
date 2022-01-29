const VALIDATE_USER = "VALIDATE_USER"
const FAV_MOVIES = "ADD_FAV_MOVIES"
const SEEN_MOVIES = "ADD_SEEN_MOVIES"


//ACTION
export const validateUser = (username, password) => ({
    type: VALIDATE_USER,
    payload: { username, password }
})

export const favList = (movieId) => ({
    type: FAV_MOVIES,
    payload: movieId
})

export const seenList = (movieId) => ({
    type: SEEN_MOVIES,
    payload: movieId
})

//REDUCER
