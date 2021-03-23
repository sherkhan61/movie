import {popularActions} from "./actions";


let initialState = {
    results: [],
    currentPage: 1,
    pageSize: 20,
    totalPagesCount: 5,
}

const popularReducer = (state = initialState, action = popularActions) => {
    switch (action.type) {
        case "SET_RESULTS":
            return { ...state, results: action.results };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    }
}



export default popularReducer;