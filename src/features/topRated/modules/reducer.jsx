import {topRatedActions} from "./actions";


let initialState = {
    results: [],
    pageSize: 20,
    currentPage: 1,
    totalPageCount: 5,
}

const topRatedReducer = (state = initialState, action = topRatedActions) => {
    switch (action.type) {
        case "SET_RESULTS":
            return { ...state, results: action.results };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    }
}



export default topRatedReducer;