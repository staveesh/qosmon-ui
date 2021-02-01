import { combineReducers } from "redux";
import user from "./userReducer";
import jobState from "./jobReducer";

const rootReducer = combineReducers({ user, jobState });

export default rootReducer;
