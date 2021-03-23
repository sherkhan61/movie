import {homeAction} from './actions'



let initialState = {
    results: [],
}

const homeReducer = (state = initialState, action = homeAction) => {
    switch (action.type) {
        case "SET_RESULTS":
            return { ...state, results: action.results };
        default:
            return state;
    }
}



export default homeReducer;