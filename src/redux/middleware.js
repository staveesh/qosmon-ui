import axios from "axios";
import * as constants from "./constants";
import { logoutUser } from "./actions/authActionCreator";

const buildApiTarget = (params, url) => {
  if (params) {
    let count = 0;
    let queryParams = "";
    for (var param of Object.keys(params)) {
      if (count === 0) {
        queryParams += `?${param}=${params[param]}`;
      } else {
        queryParams += `&${param}=${params[param]}`;
      }
      count += 1;
    }
    return process.env.REACT_APP_API_URL + url + queryParams;
  } else {
    return process.env.REACT_APP_API_URL + url;
  }
};

export const apiMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.type !== constants.API) return next(action);
  const AUTH_TOKEN = getState().user.token;
  if (AUTH_TOKEN)
    axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
  const {
    url,
    method,
    success,
    data,
    params,
    postProcessSuccess,
    postProcessError,
  } = action.payload;

  axios({
    method,
    url: buildApiTarget(params, url),
    data: data ? data : null,
  })
    .then((response) => {
      if (success) dispatch(success(response.data));
      if (postProcessSuccess) postProcessSuccess(response.data);
    })
    .catch((err) => {
      if (!err.response) console.warn(err);
      else {
        if (err.response && err.response.status === 403) dispatch(logoutUser());
        if (err.response.data.detail) {
          if (postProcessError) postProcessError(err.response.data.detail);
        }
      }
    });
};
