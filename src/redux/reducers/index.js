import { combineReducers } from "redux";
import user from "./userReducer";
import jobState from "./jobReducer";
import nodeState from "./nodesReducer";
import accessPointState from "./accesspointsReducer";

const rootReducer = combineReducers({ user, jobState, nodeState, accessPointState });

export default rootReducer;
