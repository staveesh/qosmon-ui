import * as constants from "./../constants";

const INITIAL_STATE = {
  deviceIds: [],
  nodes: []
};

export default function nodesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.FETCH_NODES:
      return {
        deviceIds: action.payload.deviceIds,
        nodes: action.payload.data,
      };
    default:
      return state;
  }
}
