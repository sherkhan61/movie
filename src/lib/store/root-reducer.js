import {combineReducers} from "redux";
import homeReducer from "../../features/home/modules/reducer";
import blockReducer from "../../features/block/modules/reducer";
import trailerReducer from "../../features/trailer/modules/reducer";
import popularReducer from "../../features/popular/modules/reducer";



export const rootReducer = combineReducers({
    home: homeReducer,
    block: blockReducer,
    trailer: trailerReducer,
    popular: popularReducer
})