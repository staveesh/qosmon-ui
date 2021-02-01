import * as constants from "./../constants";

const INITIAL_STATE = {
  jobs: [],
  jobResult: [],
};

export default function jobReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.FETCH_JOBS:
      return { jobs: action.payload, jobResult: state.jobResult };
    case constants.FETCH_JOB_RESULT:
      return { jobs: state.jobs, jobResult: action.payload };
    case constants.RESET_USER_INFO:
      return INITIAL_STATE;
    default:
      return state;
  }
}
