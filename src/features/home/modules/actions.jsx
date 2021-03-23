import {MovieDBApi} from "../../../api/movieDBApi";


export const homeAction = {
    setResults: (results) => ( { type: "SET_RESULTS", results } )
}


export const getResults = (results) => async (dispatch) => {
    const response = await MovieDBApi.getLatest ()
    dispatch (homeAction.setResults (response.data.results) );
}