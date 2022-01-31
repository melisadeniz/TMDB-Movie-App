const GET_GENRES = "GET_GENRES"

export const getGenres = (genres) => ({
    type: GET_GENRES,
    payload: genres
})

export const genresReducer = (genresList = [], action) => {
    switch(action.type) {
        case GET_GENRES:
            return action.payload
        default:
            return genresList
    }
}