import { combineReducers } from "redux";
import navbarReducer from "./navbar";
import serviceReducer from "./service";
import loadingReducer from "./loading";
const rootReducer = combineReducers({
    navbarReducer, serviceReducer, loadingReducer
});

export default rootReducer;