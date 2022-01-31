const LOAD_MORE = "LOAD_MORE_MOVIES"
const RESET_LOAD = "RESET_LOAD"

export const loadMoreMovies = () => ({
    type: LOAD_MORE,
    
})

export const resetLoad = () => ({
    type: RESET_LOAD
})

const loadMoreReducer = (pages = [1], action) => {
    switch(action.type) {
        case LOAD_MORE:
            return [...pages, pages[pages.length-1]+1]
        case RESET_LOAD:
            return [1]
        default:
            return pages
    }
}

export {loadMoreReducer}
