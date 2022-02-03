const GENRES = "GENRES";

export const getGenres = (genres) => {
    return {
        type: GENRES,
        payload: genres,
    }

};

export const genreReducer = (genresList = [], action) => {
    switch (action.type) {
        case GENRES:
            return action.payload
        default:
            return genresList;
    };
};

