import * as constants from "../constants";

export const fetchAllAccessPoints = (params) => ({
  type: constants.API,
  payload: {
    method: "GET",
    url: "/access-points",
    params,
    success: (response) => setAccessPoints(response),
  },
});

const setAccessPoints = (res) => ({
  type: constants.FETCH_ACCESS_POINTS,
  payload: res,
});
