import {MovieDBApi} from "../../../api/movieDBApi";


export const trailerActions = {
    setResults: (results) => ( { type: "SET_RESULTS", results } )
}


export const getVideos = (movieId) => (dispatch) => {
    MovieDBApi.getVideos (movieId)
        .then (response => {
            dispatch (trailerActions.setResults (response.data.results))
        })
}