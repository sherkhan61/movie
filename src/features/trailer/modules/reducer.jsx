import {trailerActions} from "./actions";


let initialState = {
    results: [],
}

const trailerReducer = (state = initialState, action = trailerActions) => {
    switch (action.type) {
        case "SET_RESULTS":
            return { ...state, results: action.results }
        default:
            return state;
    }
}


export default trailerReducer;