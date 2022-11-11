import { todoReducer } from "./todoreducer";

import { combineReducers } from "redux";

// This is a modular export means use {} while imprt
export const reducers = combineReducers(
    { 
    todoReducer
    }
);

const test = {}

 export default test;