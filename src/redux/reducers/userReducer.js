import * as constants from "./../constants";

const defaultState = {
  email: null,
  roles: [],
  token: null,
  isLoggedIn: false,
};

const userInfo = localStorage.getItem("USER_INFO");
const INITIAL_STATE = userInfo ? JSON.parse(userInfo) : defaultState;

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.USER_SIGN_UP:
      return { ...defaultState };
    case constants.USER_LOG_IN:
      return { ...action.payload };
    case constants.RESET_USER_INFO:
      return { ...defaultState };
    default:
      return state;
  }
}
