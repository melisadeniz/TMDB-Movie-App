const SORT = "SORT"
const GENRE_FILTER = "GENRE_FILTER"
const REMOVE_GENRE_FILTER = "REMOVE_GENRE_FILTER"
const START_DATE_FILTER = "DATE_FROM_FILTER"
const END_DATE_FILTER = "DATE_TO_FILTER"
const SORT_FILTER_RESULTS = "GET_SORT_FILTER_RESULTS"


// ACTION
export const sortVal = (value) => ({
    type: SORT,
    payload: value
})
export const genreFilter = (value) => ({
    type: GENRE_FILTER,
    payload: value
})

export const removeGenreFilter = (value) => ({
    type: REMOVE_GENRE_FILTER,
    payload: value
})

export const startDateFilter = (startDate) => ({
    type: START_DATE_FILTER,
    payload: startDate
})

export const endDateFilter = (endDate) => ({
    type: END_DATE_FILTER,
    payload: endDate
})

export const sortFilterResult = (movies) => ({
    type: SORT_FILTER_RESULTS,
    payload: movies
})

//REDUCER
const sortFilterReducer = (sortFilter = {sortingValue: "", filteringGenres: [], startDate:"", endDate:"" }, action) => {
    switch (action.type) {
        case SORT:
            return { ...sortFilter, sortingValue: action.payload }
        case GENRE_FILTER:
            return {...sortFilter, filteringGenres: [...sortFilter.filteringGenres, action.payload]}
        case REMOVE_GENRE_FILTER:
            return {...sortFilter, filteringGenres: sortFilter?.filteringGenres?.filter(item => item !== action.payload)}
        case START_DATE_FILTER:
            return {...sortFilter, startDate: action.payload}
        case END_DATE_FILTER:
            return {...sortFilter, endDate: action.payload}
        case SORT_FILTER_RESULTS:
            return {...sortFilter, results: action.payload}
        default:
            return sortFilter
    }
}

export default sortFilterReducer



