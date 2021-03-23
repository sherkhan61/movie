import {MovieDBApi} from "../../../api/movieDBApi";


// ==========Action Creators======================

export const popularActions = {
    setResults: (results) => ( { type: "SET_RESULTS", results } ),
    setCurrentPage: (currentPage) => ( { type: "SET_CURRENT_PAGE", currentPage } )
}



// ==========Thunk Creators======================

export const getResults = (results) => (dispatch) => {
    MovieDBApi.getPopular (results)
        .then (response => {
            dispatch (popularActions.setResults (response.data.results));
        })
}