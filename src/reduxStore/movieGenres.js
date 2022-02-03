const GENRES = "GENRES";

export const getGenres = (genres) => {
    return {
        type: GENRES,
        payload: genres,
    }

};

const genreReducer = (genresList = [], action) => {
    switch (action.type) {
        case GENRES:
            return action.payload
        default:
            return genresList;
    };
};

export default genreReducer
