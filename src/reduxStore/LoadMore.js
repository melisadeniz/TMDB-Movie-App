const LOAD_MORE_DATA = "LOAD_MORE_DATA"

export const loadMoreData = (data) => ({
    type: LOAD_MORE_DATA,
    payload: data,
})

export const loadMoreReducer = (moreData =[], action) => {
    switch(action.type) {
        case LOAD_MORE_DATA:
            return [action.payload,...moreData ]
        default:
            return moreData
    }
}
