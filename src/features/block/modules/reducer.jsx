import {blockActions} from "./actions";


let initialState = {
    data: {},
    block: null,
    images: [],
};

const blockReducer = (state = initialState, action = blockActions) => {
    switch (action.type) {
        case "SET_DATA":
            return { ...state, data: action.data };
        case "SET_BLOCK":
            return { ...state, block: action.block };
        case "SET_IMAGES":
            return { ...state, images: action.images };
        default:
            return state;
    }
}



export default blockReducer;