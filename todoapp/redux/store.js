import { legacy_createStore } from "redux";
import { reducers } from '../redux/reducer/index';

export const store = legacy_createStore(reducers); 