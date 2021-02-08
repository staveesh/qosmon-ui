import * as constants from "./../constants";

const INITIAL_STATE = {
  bssids: [],
  accessPoints: [],
};

export default function accessPointsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.FETCH_ACCESS_POINTS:
      return {
        bssids: action.payload.deviceIds,
        accessPoints: action.payload.data,
      };
    default:
      return state;
  }
}
