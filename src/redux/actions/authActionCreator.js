import * as constants from "./../constants";

export const registerUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: "POST",
    url: "/signup",
    data,
    success: (response) => processSignupResponse(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const loginUser = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: "POST",
    url: "/login",
    data,
    success: (response) => processLoginResponse(data, response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

export const logoutUser = () => {
  localStorage.removeItem("USER_INFO");
  return { type: constants.RESET_USER_INFO };
};

const processSignupResponse = (data) => {
  return { type: constants.USER_SIGN_UP };
};

const processLoginResponse = (req, res) => {
  const userInfo = {
    email: req.userName,
    roles: req.roles,
    token: res.jwt,
    isLoggedIn: true,
  };
  localStorage.setItem("USER_INFO", JSON.stringify(userInfo));
  return { type: constants.USER_LOG_IN, payload: userInfo };
};
