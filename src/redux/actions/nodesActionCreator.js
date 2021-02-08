import * as constants from "./../constants";

export const fetchAllNodes = () => ({
  type: constants.API,
  payload: {
    method: "GET",
    url: "/nodes",
    success: (response) => setNodes(response),
  },
});

const setNodes = (res) => ({
  type: constants.FETCH_NODES,
  payload: res,
});
