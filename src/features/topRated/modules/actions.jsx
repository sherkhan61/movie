import {MovieDBApi} from "../../../api/movieDBApi";

export const topRatedActions = {
    setResults: (results) => ( { type: "SET_RESULTS", results } ),
    setCurrentPage: (currentPage) => ( { type: "SET_CURRENT_PAGE", currentPage } )
}


export const getResults = (results) => (dispatch) => {
    MovieDBApi.getTopRated (results)
        .then (response => {
            dispatch (topRatedActions.setResults (response.data.results))
        })
}