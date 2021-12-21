import {createStore, combineReducers} from "redux";

import {itemReducer} from "./sliderReducer";

const rootReducer = combineReducers({
    items: itemReducer,
})
export const store = createStore(rootReducer)
